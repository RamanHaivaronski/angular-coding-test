import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user/user.component';
import {DocumentComponent} from './document/document.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'document', component: DocumentComponent},
  {path: 'user', component: UserComponent},
  {path: '**', redirectTo: 'home'}
];

export const routing = RouterModule.forRoot(appRoutes);
