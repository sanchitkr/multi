;
import { PageNotFoundComponent } from './page-not-found.component';
import { DashboardComponent } from './dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule ,Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header.component';
import { FooterComponent } from './ui/footer.component';
import { SearchComponent} from './searching/search.component';
import { SearchingModule } from './searching/searching.module';
import { RegisterModule } from './register/register.module';
import { BookingModule } from './booking/booking.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





const routes:Routes=[

  {path:"home", component:SearchComponent},
 
  {path:"", redirectTo:"/home", pathMatch:"full"},
  {path:"**", component:PageNotFoundComponent},
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
 
   
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes), SearchingModule, RegisterModule, BookingModule,FormsModule
    ,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
