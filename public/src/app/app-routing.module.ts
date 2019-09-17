import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductNewComponent } from './product-new/product-new.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', children: [
    { path: '', component: ProductListComponent },
    { path: 'edit/:id', component: ProductEditComponent },
    { path: 'new', component: ProductNewComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
