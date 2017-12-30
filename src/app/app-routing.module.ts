
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './core/containers/home-view/home-view.component';
import { AuthComponent } from './auth/containers/auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { UnauthGuard } from './auth/unauth.guard';

const routes: Routes = [
  {
    path: 'signin',
    component: AuthComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'signup',
    component: AuthComponent,
    canActivate: [UnauthGuard]
  },
  {
    path: 'signout',
    component: AuthComponent
  },
  {
    path: 'notes',
    loadChildren: './notes/notes.module#NotesModule',
    canActivate: [AuthGuard]
  },
  {
      path: '',
      // component: HomeViewComponent,
      canActivate: [AuthGuard],
      pathMatch: 'full',
      redirectTo: '/notes'
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
