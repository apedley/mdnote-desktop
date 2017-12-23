
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewComponent } from './core/containers/home-view/home-view.component';
import { AuthComponent } from './auth/containers/auth/auth.component';

const routes: Routes = [
  {
    path: 'signin',
    component: AuthComponent
  },
  {
    path: 'signup',
    component: AuthComponent
  },
  {
    path: 'signout',
    component: AuthComponent
  },
  {
      path: '',
      component: HomeViewComponent
  }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
