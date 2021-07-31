import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PolicyMember } from '../PolicyMember';



@Injectable({ providedIn: 'root' })
export class SearchService {

    private membersUrl = 'https://rcvp3-api.azurewebsites.net/members?policyNumber=';  // URL to web api
    private memberSource = new BehaviorSubject([] as PolicyMember[]);
    member = this.memberSource.asObservable();

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(
        private http: HttpClient) { }

    /** GET hero by id. Will 404 if id not found */
    getPolicyMember(policyNumber: number | undefined): Observable<PolicyMember[]> {
        const url = `${this.membersUrl}${policyNumber}`;
        console.log(url);
        return this.http.get<PolicyMember[]>(url).pipe(
            tap(_ => console.log(`fetched policyNumber id=${policyNumber}`)),
            tap(members => this.memberSource.next(members)),
            catchError(this.handleError<PolicyMember[]>(`getPolicyMember policyNumber=${policyNumber}`))
        );
    }

    resetMemberSource() {
        this.member = new BehaviorSubject([] as PolicyMember[]);
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}