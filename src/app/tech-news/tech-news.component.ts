import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-news',
  templateUrl: './tech-news.component.html',
  styleUrls: ['./tech-news.component.css']
})
export class TechNewsComponent implements OnInit {

  constructor(private service:NewsServiceService) { }

  tech:any = [];

  ngOnInit(): void {
    this.service.tech().subscribe((result) => {
      console.log(result)
      this.tech = result.articles
    })
  }

  readLater() {
    this.saveNews()
  }

  saveNews() {
    localStorage.setItem('news', JSON.stringify(this.tech));
  }
}
