import { NewsServiceService } from './../news-service.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {

  searchNews: any = [];
  // text = '';
  // @Input() items : any = [];
  searchInput: string = '';

  constructor(private service:NewsServiceService) { }

  ngOnInit(): void {


  }

  onKeyUp(x: any) {
    var searchText = x.target.value;

    this.service.search(searchText).subscribe((result) => {

      this.searchNews = result.articles
    })

  }

}
