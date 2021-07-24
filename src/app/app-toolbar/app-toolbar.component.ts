import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent {
  @Input() headerName: string = "";
  @Input() buttonName: string = "";

}

