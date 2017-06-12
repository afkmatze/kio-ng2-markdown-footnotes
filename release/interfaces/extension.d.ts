export declare enum Types {
    lang = 0,
    output = 1,
}
export declare type TypeNameLang = 'lang';
export declare type TypeNameOutput = 'output';
export declare type Type = Types.lang | Types.output;
export declare type TypeNames = TypeNameLang | TypeNameOutput;
export declare type EnumKey<T extends string, K extends number> = T | K;
export declare type TypeOutput = typeof Types[Types.output];
export declare type TypeLang = typeof Types[Types.lang];
export interface ITyped<T> {
    type: T;
}
export interface IExtension<T extends Type> {
    type: T;
}
export interface INamedExtension<T extends TypeNames> {
    type: T;
}
export interface OutputExtensionModule {
    regex?: RegExp;
    replace?: string;
    filter?(text: string, converter: any, options?: any): string;
}
export interface OutputExtension extends OutputExtensionModule, IExtension<Types.output> {
}
export interface OutputNamedExtension extends OutputExtensionModule, INamedExtension<'output'> {
}
export interface LanguageExtensionModule {
    regex?: RegExp;
    replace?: string;
    filter?(text: string, converter: any, options?: any): string;
}
export interface LanguageExtension extends LanguageExtensionModule, IExtension<Types.lang> {
}
export interface LanguageNamedExtension extends LanguageExtensionModule, INamedExtension<'lang'> {
}
export declare type Extension = LanguageExtension | OutputExtension;
export declare type NamedExtension = LanguageNamedExtension | OutputNamedExtension;
export interface MapExtension {
    (extension: LanguageExtension): INamedExtension<'lang'>;
    (extension: OutputExtension): INamedExtension<'output'>;
}
