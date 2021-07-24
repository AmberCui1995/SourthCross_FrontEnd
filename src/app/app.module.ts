import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MemberSearchComponent,
    SearchResultComponent,
    AppToolbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
