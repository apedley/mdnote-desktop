import { NgModule } from '@angular/core';
import { ClickStopPropagation } from "app/shared/directives/click-stop-propagation.directive";

export const DIRECTIVES = [ ClickStopPropagation ];

@NgModule({
  declarations: DIRECTIVES,
  exports: DIRECTIVES,
})
export class DirectivesModule {}
