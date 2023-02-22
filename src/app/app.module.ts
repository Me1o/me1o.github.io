import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {AnalyticsService} from "./services/analytics.service";
import {GtagModule} from "angular-gtag";

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    PostComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, GtagModule.forRoot({ trackingId: 'G-G8CYCYXG39', trackPageviews: false })],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
