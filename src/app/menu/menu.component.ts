import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../../constants/menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuList = MENU_ITEMS;

  ngOnInit(): void {}
}
