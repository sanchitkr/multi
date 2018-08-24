import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchingRoutingModule } from './searching-routing.module';
import { SearchComponent } from './search.component';
import { TrendingMoviesComponent } from './trendingmovies.component';
import { ResultComponent } from './result.component';
import { DetailsComponent } from './details.component';

@NgModule({
  imports: [
    CommonModule,
    SearchingRoutingModule
  ],
  declarations: [SearchComponent, TrendingMoviesComponent,ResultComponent, DetailsComponent],
  exports: [SearchComponent, TrendingMoviesComponent,ResultComponent, DetailsComponent]
})
export class SearchingModule { }
