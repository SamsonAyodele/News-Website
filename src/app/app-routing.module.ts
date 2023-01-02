import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsHeadingComponent } from './news-heading/news-heading.component';

const routes: Routes = [
  {
    path:'',
    component:NewsHeadingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
