import { 
  LanguageExtension, OutputExtension, 
  LanguageNamedExtension, OutputNamedExtension, 
  IExtension, Extension, Types,
  TypeNameLang,
  TypeNameOutput,
  INamedExtension, NamedExtension, TypeNames ,
  MapExtension
} from '../interfaces/extension'


export function mapExtension ( extension:Extension ) {
  const t = extension.type
  const typeName = Types[t]
  return {
    ...extension,
    type: typeName
  }
}

export function isOfType <T extends Types>( other:any, type:T ):other is T {
  return other === type
}

export function hasTypeName <T extends TypeNames>( other:any, typeName:T ):other is T {
  return other === typeName
}

export function isLanguageType ( other:any ):other is Types.lang {
  return isOfType ( other, Types.lang )
}

export function isOutputType ( other:any ):other is Types.output {
  return isOfType ( other, Types.output )
}

export function isExtension <T extends Types> ( other:any, type:T ):other is IExtension<T> {
  return ( 'type' in other ) && isOfType(other.type, type)
}

export function isNamedExtension <T extends TypeNames> ( other:any, type:T ):other is INamedExtension<T> {
  return ( 'type' in other ) && hasTypeName(other.type, type)
}

export function isLanguageExtension ( other:any ):other is LanguageExtension|LanguageNamedExtension {
  return isOfType(other.type,Types.lang) || hasTypeName(other.type,'lang')
}

export function isOutputExtension ( other:any ):other is OutputExtension|OutputNamedExtension {
  return isOfType(other.type,Types.output) || hasTypeName(other.type,'output')
}

export function typeName <T extends Types>( type:T ):TypeNames {
  if ( isOfType(type,Types.lang) ) {
    return 'lang'
  }
  if ( isOfType(type,Types.output) ) {
    return 'output'
  }
}

export class MarkdownFootnotesParser {

  constructor(protected footnodes:any[]=[]){}

  protected extensions():Extension[] {
    return [
      {
        type: Types.output,
        filter(text:string,converter:any,options?:any){
          console.log('footnote parsed\n', text)
          return text
        }
      }
    ]
  }



  toConverterOptions(){
    const exts = this.extensions()

    const map = <T extends Types, K extends TypeNames>( extension:IExtension<T> ):INamedExtension<K> => {
      
      const tName = typeName ( extension.type )
      return <INamedExtension<K>>{
        ...extension,
        type: tName
      }    
      
    }

    return function MarkdownFootnotesExtension <K extends TypeNames>():INamedExtension<K>[] {
      return exts.map ( <T extends Types>( extension:IExtension<T> ):INamedExtension<K> => map<T,K>(extension) )
    }
  }


}