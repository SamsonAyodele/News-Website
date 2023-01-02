import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor( private http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?category=business&apiKey=c4db8bc772784f75a743d51742fcb719&page=1"

  //headings
  headlines(): Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }
}
