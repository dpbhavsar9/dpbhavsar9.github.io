import { Component, OnInit } from '@angular/core';

import { text } from './text';

@Component({
  selector: 'app-readme',
  templateUrl: './readme.component.html',
  styleUrls: ['./readme.component.scss'],
})
export class ReadmeComponent implements OnInit {

  text = text;
  constructor() {}

  ngOnInit(): void {}
}
