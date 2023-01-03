import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.css']
})
export class BusinessNewsComponent implements OnInit {

  constructor(private service:NewsServiceService) { }

  business:any = [];

  ngOnInit(): void {
    this.service.business().subscribe((result) => {
      console.log(result);
      this.business = result.articles
    })
  }

  readLater() {
    this.saveNews()
  }

  saveNews() {
    localStorage.setItem('news', this.business);
  }
}
