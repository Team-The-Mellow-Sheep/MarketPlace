import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products-list', loadChildren: './products-list/products-list.module#ProductsListModule' }, // component: ProductsListComponent },
  { path: 'product', loadChildren: './product/product.module#ProductModule' },
  { path: 'users', loadChildren: './users/users.module#UsersModule' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
