import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    HttpClientModule,
    AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
