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

import { IndexRouteComponent } from './routes/index-route/index-route.component';

import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { HomeNavbarComponent } from './routes/home-route/home-navbar/home-navbar.component';
import { AvabarComponent } from './routes/home-route/avabar/avabar.component';
import { MultiFeedComponent } from './routes/home-route/multifeed/multifeed.component';
import { FeedComponent } from './routes/home-route/multifeed/feed/feed.component';
import { PostComponent } from './routes/home-route/multifeed/feed/post/post.component';
import { CommentsComponent } from './routes/home-route/multifeed/feed/post/comments/comments.component';

// Services
import { SessionService } from './services/session.service';
import { StateService } from './services/state.service';
import { ScrollerService } from './services/scroller.service';
import { VisitationService } from './services/visitation/visitation.service';
import { VisitModalComponent } from './services/visitation/visit-modal.component';

// Guards
import { LoggedInGuard } from './guards/loggedin.guard';
import { LoggedOutGuard } from './guards/loggedout.guard';

// Forms & Validators
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { MustMatchValidator } from './forms/must-match.validator';

// Directives
import { RecordScrollDirective } from './directives/record-scroll.directive';

@NgModule({
  declarations: [ // directives that we want to share across the module
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
    RecordScrollDirective,
    VisitModalComponent,
  ],
  entryComponents: [ // directives called only from controllers
    VisitModalComponent
  ],
  imports: [ // other modules whose declarations we want to use
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule.forRoot(),
  ],
  providers: [ // singleton objects we want to dependency inject across the module
    SessionService,
    StateService,
    ScrollerService,
    VisitationService,
    LoggedInGuard,
    LoggedOutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
