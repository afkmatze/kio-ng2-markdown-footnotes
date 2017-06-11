import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'

@NgModule({
  imports: [CommonModule],
  //declarations: [],
  //providers: [ ],
  //entryComponents: [],
  exports: [CommonModule]
})
export class MainModule {}

export function forRoot ():ModuleWithProviders {
  return {
    ngModule: MainModule,
    providers: []
  }
}
