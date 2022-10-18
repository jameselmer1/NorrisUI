import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Joke } from '../Joke';

@Injectable({
  providedIn: 'root'
})

export class ChuckNorrisJokeService {
  private chuckApiRoot = 'https://localhost:44386/api/v1/ChuckNorrisJokes';
  private chuckGetUrl = this.chuckApiRoot + '/next';
   
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.chuckGetUrl)
      .pipe(
        tap(_ => console.log('fetched joke')),
        catchError(this.handleError<Joke>('getJoke'))
      );
  }

  saveJoke(joke:Joke): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(joke);
    console.log(this.chuckApiRoot);
    console.log(body);
    var result = this.http.post(this.chuckApiRoot, body, {'headers':headers});
    return result;
  }

  getAllJokes(): Observable<Joke[]> {
    console.log('calling ' + this.chuckApiRoot);
    return this.http.get<Joke[]>(this.chuckApiRoot);
  }

  deleteAllJokes(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {},
    };
    console.log("delete called");
    return this.http.delete(this.chuckApiRoot);
  }

  /**
   * This was used from https://angular.io/tutorial/toh-pt6
   * 
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
