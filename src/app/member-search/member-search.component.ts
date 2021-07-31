import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroupDirective, NgForm, ValidatorFn, Validators } from '@angular/forms';
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

  constructor(private searchService: SearchService, public userForm: FormBuilder) {

  }
  ngOnInit() {

  }

  headerValue = "Member Search";
  buttonValue = "menu";

  startDate = new Date();
  memberCard?: string | undefined;
  policyNumber?: number | undefined;

  dateFormControl = new FormControl(this.startDate, Validators.required);

  policyFormControl = new FormControl(this.policyNumber, [
    Validators.required,
    Validators.pattern("[0-9]*")
  ]);

  memberCardNumberFormControl = new FormControl(this.memberCard, [
    Validators.pattern("^[A-Za-z0-9]+$"),
  ]);

  form = this.userForm.group({
    date: this.dateFormControl,
    cardNumber: this.memberCardNumberFormControl,
    policyNumber: this.policyFormControl
  });

  searchPolicyMember(policyNumber: number | undefined): void {
    if (this.form.valid) {
      console.log(this.form);
      console.log('form submitted');
      this.searchService.getPolicyMember(policyNumber).subscribe(members => console.log(members));
    } else {

      this.policyFormControl.markAsTouched();
      console.log('failed');
    }
  }

  resetPolicyMember(): void {
    this.startDate = new Date();
    this.policyNumber = undefined;
    this.memberCard = undefined;
    this.searchService.resetMemberSource();

  }
}
