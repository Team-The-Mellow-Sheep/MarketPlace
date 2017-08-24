import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    HomeModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
