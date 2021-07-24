import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})
export class MemberSearchComponent implements OnInit {

  constructor() { }
  headerValue = "Member Search";
  buttonValue = "menu";

  ngOnInit(): void {
  }

}
