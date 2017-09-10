import { AuthService } from './shared/services/auth.service';
import { UserRoutersService } from './shared/services/user-routers.service';
import { HomeModule } from './home/home.module';
import { NotFoundModule } from './not-found/not-found.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    HomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [AuthService, UserRoutersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
