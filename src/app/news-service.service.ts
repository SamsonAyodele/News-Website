import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor( private http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c4db8bc772784f75a743d51742fcb719&page=1"

  businessApi =  "https://newsapi.org/v2/top-headlines?category=business&apiKey=c4db8bc772784f75a743d51742fcb719&page=1"

  technologyUrl =  "https://newsapi.org/v2/top-headlines?category=technology&apiKey=c4db8bc772784f75a743d51742fcb719&page=1"

  educationUrl =  "https://newsapi.org/v2/top-headlines?category=sport&apiKey=c4db8bc772784f75a743d51742fcb719&page=1"

  searchUrl = "https://newsapi.org/v2/everything?q=sport&apiKey=c4db8bc772784f75a743d51742fcb719&language=en&page=1"

  //headings
  headlines(): Observable<any>
  {
    return this.http.get(this.newsApiUrl);
  }

  business(): Observable<any>
  {
    return this.http.get(this.businessApi);
  }

  tech(): Observable<any>
  {
    return this.http.get(this.technologyUrl);
  }

  education(): Observable<any>
  {
    return this.http.get(this.educationUrl);
  }

  search(searchText: string): Observable<any>
  {
    return this.http.get(`https://newsapi.org/v2/everything?q=${searchText}&apiKey=c4db8bc772784f75a743d51742fcb719&language=en&page=1`);
  }
}
