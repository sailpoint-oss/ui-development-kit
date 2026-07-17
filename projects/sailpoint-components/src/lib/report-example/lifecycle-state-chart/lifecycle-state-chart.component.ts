
import { Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as d3 from 'd3';
import { ConfigService } from '../../services/config.service';
import { Subject, takeUntil } from 'rxjs';
import type { Identity } from 'sailpoint-api-client/dist/identities/api';

@Component({
  selector: 'app-lifecycle-state-chart',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle-state-chart.component.html',
  styleUrl: './lifecycle-state-chart.component.scss'
})
export class LifecycleStateChartComponent implements OnChanges, OnDestroy {
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
          this.renderLifecycleStateChart();
        }
      });
  }
  @Input() identities: Identity[] = [];
  @ViewChild('lifecycleChart', { static: true }) private lifecycleChartContainer!: ElementRef;

  // Chart dimensions
  private width = 700;
  private height = 400;
  private margin = { top: 20, right: 30, bottom: 60, left: 40 };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['identities'] && this.identities.length > 0) {
      this.renderLifecycleStateChart();
    }
  }

  renderLifecycleStateChart() {
    if (!this.lifecycleChartContainer) return;
    
    const element = this.lifecycleChartContainer.nativeElement;
    d3.select(element).selectAll('*').remove();
    
    // Count identities by lifecycle state
    const lifecycleCounts: {[key: string]: number} = {};
    
    this.identities.forEach(identity => {
      let state = 'Unknown';
      
      if (identity.lifecycleState && identity.lifecycleState.stateName) {
        state = identity.lifecycleState.stateName;
      } else if (identity.attributes && 'cloudLifecycleState' in identity.attributes) {
        state = identity.attributes.cloudLifecycleState as string;
      }
      
      lifecycleCounts[state] = (lifecycleCounts[state] || 0) + 1;
    });
    
    const data = Object.entries(lifecycleCounts)
      .map(([key, value]) => ({ state: key, count: value }))
      .sort((a, b) => b.count - a.count);
    
    const svg = d3.select(element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
    
    const x = d3.scaleBand()
      .domain(data.map(d => d.state))
      .range([0, this.width - this.margin.left - this.margin.right])
      .padding(0.2);
      
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count) || 0])
      .nice()
      .range([this.height - this.margin.top - this.margin.bottom, 0]);
    
    // Add X axis
    svg.append('g')
      .attr('transform', `translate(0,${this.height - this.margin.top - this.margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('transform', 'translate(-10,0)rotate(-45)')
      .style('text-anchor', 'end');
    
    // Add Y axis
    svg.append('g')
      .call(d3.axisLeft(y));
    
    // Color scale
    const color = d3.scaleOrdinal()
      .domain(data.map(d => d.state))
      .range(d3.schemeSet2);
    
    // Add horizontal lines
    svg.selectAll('.grid-line')
      .data(y.ticks())
      .enter()
      .append('line')
      .attr('class', 'grid-line')
      .attr('x1', 0)
      .attr('x2', this.width - this.margin.left - this.margin.right)
      .attr('y1', d => y(d))
      .attr('y2', d => y(d))
      .attr('stroke', '#e0e0e0')
      .attr('stroke-width', 0.5);
    
    // Add clickable bars
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.state) || 0)
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth())
      .attr('height', d => this.height - this.margin.top - this.margin.bottom - y(d.count))
      .attr('fill', d => color(d.state) as string)
      .attr('rx', 4)
      .attr('ry', 4)
      .style('cursor', 'pointer')
      .on('click', (event, d) => {
        // Navigate to details view with lifecycle state filter
        void this.router.navigate(['/report-example/details'], { 
          queryParams: { 
            category: 'lifecycle',
            value: d.state
          }
        });
      });
      
    // Add title with theme-aware color
    svg.append('text')
      .attr('x', (this.width - this.margin.left - this.margin.right) / 2)
      .attr('y', -5)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .style('font-weight', 'bold')
      .style('fill', this.isDark ? '#ffffff' : '#000000')
      .text('Identities by Lifecycle State');
      
    // Add clickable labels
    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => (x(d.state) || 0) + x.bandwidth() / 2)
      .attr('y', d => y(d.count) - 5)
      .attr('text-anchor', 'middle')
      .style('cursor', 'pointer')
      .style('fill', this.isDark ? '#ffffff' : '#000000')
      .text(d => d.count)
      .on('click', (event, d) => {
        // Navigate to details view with lifecycle state filter
        void this.router.navigate(['/report-example/details'], { 
          queryParams: { 
            category: 'lifecycle',
            value: d.state
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}