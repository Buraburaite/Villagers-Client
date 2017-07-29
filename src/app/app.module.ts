// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// NGX BootStrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

// My View Components
import { AppComponent } from './app.component';

import { IndexRouteComponent } from './index-route/index-route.component';

import { HomeRouteComponent } from './home-route/home-route.component';
import { HomeNavbarComponent } from './home-route/home-navbar/home-navbar.component';
import { AvabarComponent } from './home-route/avabar/avabar.component';
import { MultiFeedComponent } from './home-route/multifeed/multifeed.component';
import { FeedComponent } from './home-route/multifeed/feed/feed.component';
import { PostComponent } from './home-route/multifeed/feed/post/post.component';
import { CommentsComponent } from './home-route/multifeed/feed/post/comments/comments.component';

// Services
import { SessionService } from '../services/session.service';
import { StateService } from '../services/state.service';

// Guards
import { LoggedInGuard } from '../guards/loggedin.guard';
import { LoggedOutGuard } from '../guards/loggedout.guard';

// Forms & Validators
import { LoginFormComponent } from '../forms/login-form/login-form.component';
import { SignupFormComponent } from '../forms/signup-form/signup-form.component';
import { MustMatchValidator } from '../forms/must-match.validator';

// Directives
import { ScrollTrackerDirective } from '../directives/scroll-tracker.directive';

@NgModule({
  declarations: [
    AppComponent,
    IndexRouteComponent,
    HomeRouteComponent,
    HomeNavbarComponent,
    AvabarComponent,
    MultiFeedComponent,
    FeedComponent,
    PostComponent,
    CommentsComponent,
    LoginFormComponent,
    SignupFormComponent,
    MustMatchValidator,
    ScrollTrackerDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [
    SessionService,
    StateService,
    LoggedInGuard,
    LoggedOutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
