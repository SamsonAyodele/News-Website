import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';

@Component({
  selector: 'app-news-heading',
  templateUrl: './news-heading.component.html',
  styleUrls: ['./news-heading.component.css']
})
export class NewsHeadingComponent implements OnInit {

  constructor(private service:NewsServiceService) { }

  headlinesDisplay:any =[];

  ngOnInit(): void {
    this.service.headlines().subscribe((result) => {
      console.log(result);
      this.headlinesDisplay = result.articles
    })
  }

  readLater() {
    this.saveNews()
  }

  saveNews() {
    localStorage.setItem('news', JSON.stringify(this.headlinesDisplay));
  }
}
