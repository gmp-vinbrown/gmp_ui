import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { AccordionModule } from 'primeng/accordion';
import { PasswordResetComponent } from './auth/password-reset/password-reset.component';
import { SchoolComponent } from './school/school.component';
import { LocationComponent } from './location/location.component';
import { MemberComponent } from './member/member.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuSidebarComponent,
    TopNavComponent,
    PasswordResetComponent,
    SchoolComponent,
    LocationComponent,
    MemberComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    InputTextModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
