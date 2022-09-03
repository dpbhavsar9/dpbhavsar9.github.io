import { Component, OnInit } from '@angular/core';
import { OPTIONS, LINKS } from 'src/constants/tableau-utils';

@Component({
  selector: 'app-share-of-govt-spending',
  templateUrl: './share-of-govt-spending.component.html',
  styleUrls: ['./share-of-govt-spending.component.scss']
})
export class ShareOfGovtSpendingComponent implements OnInit {
  OPTIONS = OPTIONS;
  LINKS = LINKS;

  constructor() { }

  ngOnInit(): void {
  }

}
