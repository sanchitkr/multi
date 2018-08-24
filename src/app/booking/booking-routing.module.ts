import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation.component';
import { BookComponent } from './book.component';
import { SelectShowComponent } from './select-show.component';

const routes: Routes = [

  {path:"payment",component:BookComponent},
  {path:"payment/confirm", component:ConfirmationComponent},
  {path:"select", component:SelectShowComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
