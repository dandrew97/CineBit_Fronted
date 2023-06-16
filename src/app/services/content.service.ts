import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private contentTitle!: string;
  private apiUrl = "http://localhost:3000/users";
  private userData!:string;

  constructor(private http: HttpClient, private router:Router) { }
  getContent() {
    const getUrl = `${this.apiUrl}/${this.contentTitle}`;
    console.log(getUrl);
    return this.http.get(getUrl);
  }
}
