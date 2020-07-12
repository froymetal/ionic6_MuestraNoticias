import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/Interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
    query = apiUrl + query;
    return this.http.get<T>(query, { headers } );
  }

  getTopHead() { 
    // tslint:disable-next-line: max-line-length
    //return this.http.get<RespuestaTopHeadLines>('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4a2bcb68f8c448f28915f34ed99d3a4b');
    return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us`);
  }

  getTopHeadCategoria(categoria: string) { 
   //return this.http.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4a2bcb68f8c448f28915f34ed99d3a4b');
   return this.ejecutarQuery<RespuestaTopHeadLines>(`/top-headlines?country=us&category=${categoria}`);
  }

}
