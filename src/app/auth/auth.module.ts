import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './containers/auth/auth.component';
import { RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { UnauthGuard } from './unauth.guard';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  declarations: [
    AuthComponent,
    AuthFormComponent
  ],
  providers: [
    AuthService,
    AuthGuard,
    UnauthGuard
  ]
})
export class AuthModule { }
