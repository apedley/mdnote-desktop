import { NgModule } from '@angular/core';
import { HeaderComponent } from './containers/header/header.component';
import { HomeViewComponent } from './containers/home-view/home-view.component';
import { ElectronService } from './electron.service';

@NgModule({
  imports: [],
  exports: [
    HeaderComponent,
    HomeViewComponent
  ],
  declarations: [
    HeaderComponent,
    HomeViewComponent
  ],
  providers: [
    ElectronService
  ]
})
export class CoreModule { }
