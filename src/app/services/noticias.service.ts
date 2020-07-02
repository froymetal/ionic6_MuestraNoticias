import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadLines } from '../interfaces/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHead() { 
    return this.http.get<RespuestaTopHeadLines>('http://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=4a2bcb68f8c448f28915f34ed99d3a4b');
  }
}
