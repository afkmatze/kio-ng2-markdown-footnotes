import { CommonModule } from '@angular/common'
import { NgModule, ModuleWithProviders, Provider } from '@angular/core'

import { MarkdownFootnotesParser } from './classes/MarkdownFootnotes.class'
export { kioFootnotes } from './extension'

@NgModule({
  imports: [CommonModule],
  //declarations: [],
  //providers: [ ],
  //entryComponents: [],
  exports: [CommonModule]
})
export class MarkdownFootnotes {
  public static forRoot ( ):ModuleWithProviders {

    return {
      ngModule: MarkdownFootnotes,
      providers: [
        {
          provide: MarkdownFootnotesParser,
          useClass: MarkdownFootnotesParser
        }
      ]
    }

  }
}
