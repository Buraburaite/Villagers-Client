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

import { AuthService } from './services/auth.service';

import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { IndexRouteComponent } from './routes/index-route/index-route.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AvabarComponent,
    FeedComponent,
    PostComponent,
    CommentsComponent,
    HomeRouteComponent,
    IndexRouteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
