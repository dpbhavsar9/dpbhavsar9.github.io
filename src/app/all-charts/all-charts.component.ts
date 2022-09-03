import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CHARTS_CONFIG } from '../../constants/charts-list';

@Component({
  selector: 'app-all-charts',
  templateUrl: './all-charts.component.html',
  styleUrls: ['./all-charts.component.scss'],
})
export class AllChartsComponent implements OnInit, OnChanges {
  chartsList = CHARTS_CONFIG;

  @Input() results: any[];
  @Input() chartName: string;
  @Input() config: any;
  @Input() view: number[] = [1150, 400];

  constructor() {
    Object.assign(this, { results: this.results });
  }

  ngOnInit(): void {
    console.log(this.results, this.chartName, this.config);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.results, this.chartName, this.config);
  }
  onSelect(event: any): void {}

  get isReady(): boolean {
    return this.results?.length && !!this.chartName;
  }
}
