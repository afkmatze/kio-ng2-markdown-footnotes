/// <reference types="showdown" />
import { ExtensionTypes, Converter, ConverterOptions } from 'kio-ng2-markdown-extension';
export declare function kioFootnotes(): {
    type: ExtensionTypes;
    filter(source: string, converter: Converter, options: ConverterOptions): string;
}[];
