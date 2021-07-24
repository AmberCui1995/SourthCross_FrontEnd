import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberSearchComponent } from './member-search/member-search.component';
import { MenuComponent } from './menu/menu.component';
import { SearchResultComponent } from './search-result/search-result.component';

const routes: Routes = [
  { path: '', component: MemberSearchComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'SearchResult', component: SearchResultComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
