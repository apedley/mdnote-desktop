import { NgModule } from '@angular/core';
import { TruncateEllipsisPipe } from './truncate-ellipsis.pipe';

export const PIPES = [ TruncateEllipsisPipe ];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
