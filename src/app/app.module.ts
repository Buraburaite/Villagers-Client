import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

import { AppComponent } from './app.component';

import { IndexRouteComponent } from './routes/index-route/index-route.component';

import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { HomeNavbarComponent } from './routes/home-route/components/home-navbar/home-navbar.component';
import { AvabarComponent } from './routes/home-route/components/avabar/avabar.component';
import { FeedComponent } from './routes/home-route/components/feed/feed.component';
import { PostComponent } from './routes/home-route/components/feed/post/post.component';
import { CommentsComponent } from './routes/home-route/components/feed/post/comments/comments.component';

import { SessionService } from './services/session.service';
import { StateService } from './services/state.service';
import { LoggedInGuard } from './services/loggedin.guard';
import { LoggedOutGuard } from './services/loggedout.guard';

import { LoginFormComponent } from './shared/forms/login-form/login-form.component';
import { SignupFormComponent } from './shared/forms/signup-form/signup-form.component';
import { VisitDirective } from './shared/directives/visit.directive';

@NgModule({
  declarations: [
    AppComponent,
    IndexRouteComponent,
    HomeRouteComponent,
    HomeNavbarComponent,
    AvabarComponent,
    FeedComponent,
    PostComponent,
    CommentsComponent,
    LoginFormComponent,
    SignupFormComponent,
    VisitDirective,
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
