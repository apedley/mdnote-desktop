import { NgModule } from '@angular/core';
import { HeaderComponent } from './containers/header/header.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { HomeViewComponent } from './containers/home-view/home-view.component';
import { ElectronService } from './electron.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { StorageService } from './storage.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent,
    HomeViewComponent,
    NgbModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    HomeViewComponent
  ],
  providers: [
    ElectronService,
    ApiService,
    StorageService
  ]
})
export class CoreModule { }
