import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { NavbarComponent } from './navbar/navbar.component';
import { PeepsComponent } from './peeps/peeps.component';
import { PageComponent } from './page/page.component';
import { PostComponent } from './page/post/post.component';
import { CommentsComponent } from './page/post/comments/comments.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PeepsComponent,
    PageComponent,
    PostComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    DropdownModule.forRoot()
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
