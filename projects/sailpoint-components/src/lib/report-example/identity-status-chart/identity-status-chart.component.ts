
import { Component, ElementRef, Input, OnChanges, OnDestroy, SimpleChanges, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import * as d3 from 'd3';
import { ConfigService } from '../../services/config.service';
import { Subject, takeUntil } from 'rxjs';
import type { Identity } from 'sailpoint-api-client/dist/identities/api';

@Component({
  selector: 'app-identity-status-chart',
  standalone: true,
  imports: [],
  templateUrl: './identity-status-chart.component.html',
  styleUrl: './identity-status-chart.component.scss'
})
export class IdentityStatusChartComponent implements OnChanges, OnDestroy {
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
          this.renderIdentityStatusChart();
        }
      });
  }
  @Input() identities: Identity[] = [];
  @ViewChild('barChart', { static: true }) private barChartContainer!: ElementRef;

  // Chart dimensions
  private width = 700;
  private height = 400;
  private margin = { top: 20, right: 30, bottom: 60, left: 40 };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['identities'] && this.identities.length > 0) {
      this.renderIdentityStatusChart();
    }
  }

  renderIdentityStatusChart() {
    if (!this.barChartContainer) return;
    
    const element = this.barChartContainer.nativeElement;
    d3.select(element).selectAll('*').remove();
    
    // Count identities by status
    const statusCounts: {[key: string]: number} = {};
    this.identities.forEach(identity => {
      const status = identity.identityStatus || 'Unknown';
      statusCounts[status] = (statusCounts[status] || 0) + 1;
    });
    
    const data = Object.entries(statusCounts).map(([key, value]) => ({ status: key, count: value }));
    
    const svg = d3.select(element)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .append('g')
      .attr('transform', `translate(${this.margin.left},${this.margin.top})`);
    
    const x = d3.scaleBand()
      .domain(data.map(d => d.status))
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
      .domain(data.map(d => d.status))
      .range(d3.schemeCategory10);
    
    // Add bars with click events
    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', d => x(d.status) || 0)
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth())
      .attr('height', d => this.height - this.margin.top - this.margin.bottom - y(d.count))
      .attr('fill', d => color(d.status) as string)
      .attr('rx', 4)
      .attr('ry', 4)
      .style('cursor', 'pointer') // Add pointer cursor to indicate clickable
      .on('click', (event, d) => {
        // Navigate to details view with status filter
        void this.router.navigate(['/report-example/details'], { 
          queryParams: { 
            category: 'status',
            value: d.status
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
      .text('Identities by Status');
      
    // Add clickable labels
    svg.selectAll('.label')
      .data(data)
      .enter()
      .append('text')
      .attr('class', 'label')
      .attr('x', d => (x(d.status) || 0) + x.bandwidth() / 2)
      .attr('y', d => y(d.count) - 5)
      .attr('text-anchor', 'middle')
      .style('cursor', 'pointer') // Add pointer cursor
      .style('fill', this.isDark ? '#ffffff' : '#000000')
      .text(d => d.count)
      .on('click', (event, d) => {
        // Navigate to details view with status filter
        void this.router.navigate(['/report-example/details'], { 
          queryParams: { 
            category: 'status',
            value: d.status
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}