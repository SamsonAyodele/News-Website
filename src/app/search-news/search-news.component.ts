import { NewsServiceService } from './../news-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {

  searchNews: any = [];
  text = '';
  @Input() items : any = [];

  constructor(private service:NewsServiceService) { }

  ngOnInit(): void {
    this.service.search().subscribe((result) => {
      this.searchNews = this.items.result
    })

  }

  onKeyUp(x: any) {
    this.text += x.target.value + ' | ';
  }

}
