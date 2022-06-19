import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http:HttpClient) { }

  getNew(url){
    return this.http.get(`${API_URL}/${url}`)
  }
}
