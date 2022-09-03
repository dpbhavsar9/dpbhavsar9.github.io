import { Component, OnInit } from '@angular/core';
import { OPTIONS, LINKS } from 'src/constants/tableau-utils';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {
  OPTIONS = OPTIONS;
  LINKS = LINKS;
  constructor() { }

  ngOnInit(): void {
  }

}
