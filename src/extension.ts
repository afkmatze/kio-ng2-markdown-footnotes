import { ExtensionType, ExtensionTypes, Extension, Converter, ConverterOptions } from 'kio-ng2-markdown-extension'


export function kioFootnotes ( ) {
  return [
    {
      type: ExtensionTypes.lang,
      filter ( source:string, converter:Converter, options:ConverterOptions ):string {
        console.log('filter source: "%s"', source)
        return source
      }
    }
  ]
}