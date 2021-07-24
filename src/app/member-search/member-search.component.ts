import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorStateMatcher } from '@angular/material/core';
import { SearchService } from '../service/search.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-member-search',
  templateUrl: './member-search.component.html',
  styleUrls: ['./member-search.component.css']
})

@Injectable()
export class MemberSearchComponent implements OnInit {

  constructor(private searchService: SearchService) {

  }


  headerValue = "Member Search";
  buttonValue = "menu";
  startDate = new Date();
  policyNumber?: number | undefined;

  policyFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern("[0-9]*")
  ]);

  memberCardNumberFormControl = new FormControl('', [
    Validators.required,
  ]);


  matcher = new MyErrorStateMatcher();

  searchPolicyMember(policyNumber: number | undefined): void {
    console.log("Hello")
    this.searchService.getPolicyMember(policyNumber).subscribe(members => console.log(members));
  }

  ngOnInit(): void {

  }

}
