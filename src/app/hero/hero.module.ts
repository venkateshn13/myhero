import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HeroComponent} from './hero.component';
import {SamComponent} from './sam.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'hero',
    component: SamComponent
  }
  // , { path: 'hero/:id',      component: HeroDetailComponent }, {   path:
  // 'heroes',   component: HeroListComponent,   data: { title: 'Heroes List' } },
  // { path: '',   redirectTo: '/heroes',   pathMatch: 'full' }, { path: '**',
  // component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    SamComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  providers: []
})
export class HeroModule {
}
