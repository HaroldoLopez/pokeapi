import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  baseUrl: string = 'https://pokeapi.co/api/v2/pokemon'

  constructor(private http: HttpClient) { }

  //GET all pokemons
  getPokemons(): Observable<any> {
    return this.http
    .get<any>(this.baseUrl+'/?offset=20&limit=10')
    .pipe(retry(1), catchError(this.handleError));
  }

  //GET one pokemon
  getOnePokemon(poke:String): Observable<any> {
    console.log(this.baseUrl+`/${poke}`);
    return this.http
    .get<any>(this.baseUrl+`/${poke}`)
    .pipe(retry(1), catchError(this.handleError));
  }


  // Error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
