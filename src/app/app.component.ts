import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(public breakpointObserver: BreakpointObserver) {
    this.showContainer = true;
  }
  public showContainer: boolean;
  title = 'SourthCrossFrontEnd';
  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 400px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.showContainer = true;
        } else {
          this.showContainer = false;
        }
      });
  }
}
