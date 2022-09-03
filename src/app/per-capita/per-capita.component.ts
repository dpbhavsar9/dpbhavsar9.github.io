import { Component, OnInit } from '@angular/core';
import { OPTIONS, LINKS } from 'src/constants/tableau-utils';

@Component({
  selector: 'app-per-capita',
  templateUrl: './per-capita.component.html',
  styleUrls: ['./per-capita.component.scss']
})
export class PerCapitaComponent implements OnInit {
  OPTIONS = OPTIONS;
  LINKS = LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
