import { Component, OnInit } from '@angular/core';
import { REGION_TOOLS } from '../../database/region';
import { CHARTS, CHARTS_CONFIG } from '../../constants/charts-list';
import { OPTIONS, LINKS } from 'src/constants/tableau-utils';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss'],
})
export class RegionComponent {
  OPTIONS = OPTIONS;
  LINKS = LINKS;
}
