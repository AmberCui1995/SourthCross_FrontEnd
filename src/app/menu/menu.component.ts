import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AppToolbarComponent } from '../app-toolbar/app-toolbar.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private _location: Location) { }
  headerValue = "Menu";
  buttonValue = "keyboard_backspace";

  backClick() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
