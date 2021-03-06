import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Fellow } from './fellow';

@Injectable({
  providedIn: 'root'
})
export class FellowsService {
  private fellowsUrl: string = 'http://localhost:3000/fellows';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET fellows from the server */
  getFellows(): Observable<Fellow[]> {
    return this.http.get<Fellow[]>(this.fellowsUrl)
      .pipe(
        tap(_ => this.log('fetched fellows')),
        catchError(this.handleError('getFellows', []))
      );
  }

  /** Log a FellowService message with the MessageService */
  private log(message: string): void {
    console.log(`FellowService: ${message}`);
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
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
