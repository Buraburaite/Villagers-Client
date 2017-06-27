import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavbarComponent } from './navbar/navbar.component';
import { AvabarComponent } from './avabar/avabar.component';
import { FeedComponent } from './feed/feed.component';
import { PostComponent } from './feed/post/post.component';
import { CommentsComponent } from './feed/post/comments/comments.component';

import { SessionService } from './services/session.service';

import { IndexRouteComponent } from './routes/index-route/index-route.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AvabarComponent,
    FeedComponent,
    PostComponent,
    CommentsComponent,
    IndexRouteComponent,
    HomeRouteComponent,
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
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
