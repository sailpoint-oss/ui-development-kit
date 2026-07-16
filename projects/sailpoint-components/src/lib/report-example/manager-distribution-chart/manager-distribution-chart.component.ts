
import { Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as d3 from 'd3';
import { ConfigService } from '../../services/config.service';
import { Subject, takeUntil } from 'rxjs';
import type { Identity } from 'sailpoint-api-client/dist/identities/api';

// Define interface for chart data
interface ChartDataPoint {
  label: string;
  value: number;
}

@Component({
  selector: 'app-manager-distribution-chart',
  standalone: true,
  imports: [],
  templateUrl: './manager-distribution-chart.component.html',
  styleUrl: './manager-distribution-chart.component.scss'
})
export class ManagerDistributionChartComponent implements OnChanges, OnDestroy {
  private destroy$ = new Subject<void>();
  isDark = false;

  constructor(
    private router: Router,
    private configService: ConfigService
  ) {
    this.configService.isDark$
      .pipe(takeUntil(this.destroy$))
      .subscribe(isDark => {
        this.isDark = isDark;
        if (this.identities.length > 0) {
          this.renderManagerDistributionChart();
        }
      });
  }
  @Input() identities: Identity[] = [];
  @ViewChild('pieChart', { static: true }) private pieChartContainer!: ElementRef;

  // Chart dimensions
  private width = 700;
  private height = 400;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['identities'] && this.identities.length > 0) {
      this.renderManagerDistributionChart();
    }
  }

  renderManagerDistributionChart() {
    if (!this.pieChartContainer) return;
    
    const element = this.pieChartContainer.nativeElement;
    d3.select(element).selectAll('*').remove();
    
    // Count identities with/without managers
    const withManager = this.identities.filter(i => i.managerRef && i.managerRef.id).length;
    const withoutManager = this.identities.length - withManager;
    
    const data = [
      { label: 'With Manager', value: withManager },
      { label: 'Without Manager', value: withoutManager }
    ];
    
    const radius = Math.min(this.width, this.height) / 2 - 50;
    
    const svg = d3.select(element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.width / 2},${this.height / 2})`);
    
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.label))
      .range(['#4CAF50', '#F44336']);
    
    const pie = d3.pie<ChartDataPoint>()
      .value(d => d.value);
    
    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);
    
    const outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);
    
    const arcs = svg.selectAll('arc')
      .data(pie(data))
      .enter()
      .append('g')
      .attr('class', 'arc');
    
    arcs.append('path')
      .attr('d', d => {
        // Cast to any to bypass type checking for D3's complex types
        // Using 'as any' is required here since D3's type system doesn't properly align
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        return arc(d as any) || '';
      })
      .attr('fill', d => color(d.data.label) as string)
      .style('cursor', 'pointer') // Add pointer cursor
      .on('click', (event, d) => {
        // Navigate to details view with manager filter
        void this.router.navigate(['/report-example/details'], { 
          queryParams: { 
            category: 'manager',
            value: d.data.label
          }
        });
      });
    
    // Add title with theme-aware color
    svg.append('text')
      .attr('x', 0)
      .attr('y', -radius - 20)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .style('fill', this.isDark ? '#ffffff' : '#000000')
      .text('Manager Distribution');
    
    // Add labels with lines
    arcs.append('text')
      .attr('transform', d => {
        // Cast to any to bypass type checking for D3's complex types
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const pos = outerArc.centroid(d as any) || [0, 0];
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midAngle < Math.PI ? 1 : -1);
        return `translate(${pos[0]},${pos[1]})`;
      })
      .attr('dy', '.35em')
      .attr('text-anchor', d => {
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midAngle < Math.PI ? 'start' : 'end';
      })
      .attr('class', 'pie-label')
      .style('cursor', 'pointer')
      .style('fill', this.isDark ? '#ffffff' : '#000000')
      .text(d => `${d.data.label}: ${d.data.value} (${Math.round(d.data.value / this.identities.length * 100)}%)`)
      .on('click', (event, d) => {
        // Navigate to details view with manager filter
        void this.router.navigate(['/report-example/details'], { 
          queryParams: { 
            category: 'manager',
            value: d.data.label
          }
        });
      });
    
    // Add polylines
    arcs.append('polyline')
      .attr('points', d => {
        // Cast to any to bypass type checking for D3's complex types
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const pos = outerArc.centroid(d as any) || [0, 0];
        const midAngle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.95 * (midAngle < Math.PI ? 1 : -1);
        // Cast to any to bypass type checking for D3's complex types
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const arcCentroid = arc.centroid(d as any) || [0, 0];
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const outerArcCentroid = outerArc.centroid(d as any) || [0, 0];
        return `${arcCentroid[0]},${arcCentroid[1]},${outerArcCentroid[0]},${outerArcCentroid[1]},${pos[0]},${pos[1]}`;
      })
      .style('fill', 'none')
      .style('stroke', 'gray')
      .style('stroke-width', 1);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}