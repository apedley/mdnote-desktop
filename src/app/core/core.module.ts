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
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PipesModule } from '../shared/pipes/index';
import { UiService } from './ui.service';
import { ShareUrlModalComponent } from './components/modals/share-url-modal.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    PipesModule
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
    HomeViewComponent,
    ToolbarComponent,
    ShareUrlModalComponent
  ],
  providers: [
    ElectronService,
    ApiService,
    StorageService,
    UiService
  ],
  entryComponents: [
    ShareUrlModalComponent
  ]
})
export class CoreModule { }
