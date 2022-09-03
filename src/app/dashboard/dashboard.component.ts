import { Component, OnInit } from '@angular/core';
import { LINKS, OPTIONS } from 'src/constants/tableau-utils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  OPTIONS = OPTIONS;
  LINKS = LINKS;

  constructor() {}

  ngOnInit(): void {}
}
