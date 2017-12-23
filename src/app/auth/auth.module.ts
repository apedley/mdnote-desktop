import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './containers/auth/auth.component';
import { RouterModule } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthService } from './auth.service';

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
    AuthService
  ]
})
export class AuthModule { }
