import { LanguageExtension, OutputExtension, LanguageNamedExtension, OutputNamedExtension, IExtension, Extension, Types, INamedExtension, TypeNames } from '../interfaces/extension';
export declare function mapExtension(extension: Extension): {
    type: string;
    regex?: RegExp;
    replace?: string;
    filter?(text: string, converter: any, options?: any): string;
} | {
    type: string;
    regex?: RegExp;
    replace?: string;
    filter?(text: string, converter: any, options?: any): string;
};
export declare function isOfType<T extends Types>(other: any, type: T): other is T;
export declare function hasTypeName<T extends TypeNames>(other: any, typeName: T): other is T;
export declare function isLanguageType(other: any): other is Types.lang;
export declare function isOutputType(other: any): other is Types.output;
export declare function isExtension<T extends Types>(other: any, type: T): other is IExtension<T>;
export declare function isNamedExtension<T extends TypeNames>(other: any, type: T): other is INamedExtension<T>;
export declare function isLanguageExtension(other: any): other is LanguageExtension | LanguageNamedExtension;
export declare function isOutputExtension(other: any): other is OutputExtension | OutputNamedExtension;
export declare function typeName<T extends Types>(type: T): TypeNames;
export declare class MarkdownFootnotesParser {
    protected footnodes: any[];
    constructor(footnodes?: any[]);
    protected extensions(): Extension[];
    toConverterOptions(): <K extends TypeNames>() => INamedExtension<K>[];
}
