import { NewsServiceService } from './../news-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-news',
  templateUrl: './education-news.component.html',
  styleUrls: ['./education-news.component.css']
})
export class EducationNewsComponent implements OnInit {

  constructor(private service: NewsServiceService) { }

  education:any = [];

  ngOnInit(): void {
    this.service.education().subscribe((result) => {
      this.education = result.articles
    })
  }

}
