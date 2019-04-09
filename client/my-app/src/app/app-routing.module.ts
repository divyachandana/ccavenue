import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcartComponent } from './viewcart/viewcart.component';
import { FailedComponent } from './failed/failed.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:"", redirectTo:"viewcart", pathMatch:"full"},
  {path:"viewcart", component:ViewcartComponent},
  {path:"failed", component:FailedComponent},
  {path:"success", component:SuccessComponent},
];

@NgModule({
  declarations: [ViewcartComponent,
    FailedComponent,
    SuccessComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
