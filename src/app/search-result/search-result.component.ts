import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { SearchService } from '../service/search.service';
import { PolicyMember } from '../PolicyMember';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

@Injectable()
export class SearchResultComponent implements OnInit {

  constructor(private searchService: SearchService) {

  }

  headerValue = "Search Result";
  buttonValue = "menu";
  memberList: PolicyMember[] = [];

  ngOnInit(): void {
    this.searchService.member.subscribe(members => this.memberList = members);
  }

}
