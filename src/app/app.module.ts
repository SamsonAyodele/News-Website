import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHeadingComponent } from './news-heading/news-heading.component';
import { NewsServiceService } from './news-service.service';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { TechNewsComponent } from './tech-news/tech-news.component';
import { EducationNewsComponent } from './education-news/education-news.component';
import { SearchNewsComponent } from './search-news/search-news.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    NewsHeadingComponent,
    BusinessNewsComponent,
    TechNewsComponent,
    EducationNewsComponent,
    SearchNewsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
