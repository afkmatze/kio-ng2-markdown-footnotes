export enum Types {
  lang,
  output
}

export type TypeNameLang = 'lang'
export type TypeNameOutput = 'output'

export type Type = Types.lang|Types.output
export type TypeNames = TypeNameLang|TypeNameOutput

export type EnumKey<T extends string,K extends number> = T|K

export type TypeOutput = typeof Types[Types.output]
export type TypeLang = typeof Types[Types.lang]


/*export type ITyped<T extends Types, K extends keyof T> = {
  [K in TypeNames]: T[K]
}
*/


export interface ITyped<T> {
  type:T
}

export interface IExtension<T extends Type> {
  type:T
}

export interface INamedExtension<T extends TypeNames> {
  type:T
}

export interface OutputExtensionModule {
  regex?:RegExp
  replace?: string
  filter?(text:string,converter:any,options?:any):string
}

export interface OutputExtension extends OutputExtensionModule, IExtension<Types.output> {}
export interface OutputNamedExtension extends OutputExtensionModule, INamedExtension<'output'> {}

export interface LanguageExtensionModule {
  regex?:RegExp
  replace?: string
  filter?(text:string,converter:any,options?:any):string
}

export interface LanguageExtension extends LanguageExtensionModule, IExtension<Types.lang> {}
export interface LanguageNamedExtension extends LanguageExtensionModule, INamedExtension<'lang'> {}

export type Extension = LanguageExtension|OutputExtension
export type NamedExtension = LanguageNamedExtension|OutputNamedExtension


export interface MapExtension  {
  (extension:LanguageExtension):INamedExtension<'lang'>
  (extension:OutputExtension):INamedExtension<'output'>
}