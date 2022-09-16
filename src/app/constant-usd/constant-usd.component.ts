import { Component, OnInit } from '@angular/core';
import { LINKS, OPTIONS } from 'src/constants/tableau-utils';

@Component({
  selector: 'app-constant-usd',
  templateUrl: './constant-usd.component.html',
  styleUrls: ['./constant-usd.component.scss']
})
export class ConstantUsdComponent implements OnInit {

  OPTIONS = OPTIONS;
  LINKS = LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
