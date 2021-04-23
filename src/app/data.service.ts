import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly APIurl = "https://localhost:44358/api";

  constructor(private httpClient: HttpClient) { }


  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

    //FIXTURES
  //get list of fixtures
  getFixturesList():Observable<any[]>{
    return this.httpClient.get<any>(this.APIurl + '/fixtures');
  }

    //update student
  getFixturesFiltered(val:any){
    return this.httpClient.post(this.APIurl + '/fixtures/getfixtures', val);
  }
}
