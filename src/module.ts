import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'
export { kioFootnotes } from './extension'

@NgModule({
  imports: [CommonModule],
  //declarations: [],
  //providers: [ ],
  //entryComponents: [],
  exports: [CommonModule]
})
export class MarkdownFootnotes {}
