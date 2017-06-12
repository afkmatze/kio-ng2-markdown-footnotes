import { ExtensionType, ExtensionTypeByName, ExtensionImplementation, ExtensionTypes, Extension, Converter, ConverterOptions } from 'kio-ng2-markdown-extension'
import * as footnotes from 'showdown-footnotes'

export function kioFootnotes ( ) {
  let footnotesExt:ExtensionImplementation<ExtensionTypes>|ExtensionImplementation<ExtensionTypes>[] = footnotes()
  if ( !Array.isArray(footnotesExt) )
  {
    footnotesExt = [footnotesExt]
  }
  footnotesExt = footnotesExt.map ( e => ({
    ...e,
    type: ExtensionTypeByName[e.type]
  }) )

  return [
    ...footnotesExt
    ,
    {
      type: ExtensionTypes.output,
      filter ( source:string, converter:Converter, options:ConverterOptions ):string {
        console.log('filter source: "%s"', source)
        return source
      }
    }
  ]
}