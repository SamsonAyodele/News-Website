import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsHeadingComponent } from './news-heading/news-heading.component';
import { NewsServiceService } from './news-service.service'


@NgModule({
  declarations: [
    AppComponent,
    NewsHeadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [NewsServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
