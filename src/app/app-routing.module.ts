import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessNewsComponent } from './business-news/business-news.component';
import { EducationNewsComponent } from './education-news/education-news.component';
import { NewsHeadingComponent } from './news-heading/news-heading.component';
import { TechNewsComponent } from './tech-news/tech-news.component';

const routes: Routes = [
  {
    path:'',
    component:NewsHeadingComponent
  },
  {
    path:'business',
    component:BusinessNewsComponent
  },
  {
    path:'tech',
    component:TechNewsComponent
  },
  {
    path:'education',
    component:EducationNewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
