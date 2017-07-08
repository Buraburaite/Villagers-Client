import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { IndexRouteComponent } from './routes/index-route/index-route.component';

import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { NavbarComponent } from './routes/home-route/components/navbar/navbar.component';
import { AvabarComponent } from './routes/home-route/components/avabar/avabar.component';
import { FeedComponent } from './routes/home-route/components/feed/feed.component';
import { PostComponent } from './routes/home-route/components/feed/post/post.component';
import { CommentsComponent } from './routes/home-route/components/feed/post/comments/comments.component';

import { SessionService } from './services/session.service';
import { StateService } from './services/state.service';

import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexRouteComponent,
    HomeRouteComponent,
    NavbarComponent,
    AvabarComponent,
    FeedComponent,
    PostComponent,
    CommentsComponent,
    LoginFormComponent,
    SignupFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [SessionService, StateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
