import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MemberSearchComponent } from './member-search/member-search.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MemberSearchComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
