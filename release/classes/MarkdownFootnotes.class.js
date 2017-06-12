var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Types } from '../interfaces/extension';
export function mapExtension(extension) {
    var t = extension.type;
    var typeName = Types[t];
    return __assign({}, extension, { type: typeName });
}
export function isOfType(other, type) {
    return other === type;
}
export function hasTypeName(other, typeName) {
    return other === typeName;
}
export function isLanguageType(other) {
    return isOfType(other, Types.lang);
}
export function isOutputType(other) {
    return isOfType(other, Types.output);
}
export function isExtension(other, type) {
    return ('type' in other) && isOfType(other.type, type);
}
export function isNamedExtension(other, type) {
    return ('type' in other) && hasTypeName(other.type, type);
}
export function isLanguageExtension(other) {
    return isOfType(other.type, Types.lang) || hasTypeName(other.type, 'lang');
}
export function isOutputExtension(other) {
    return isOfType(other.type, Types.output) || hasTypeName(other.type, 'output');
}
export function typeName(type) {
    if (isOfType(type, Types.lang)) {
        return 'lang';
    }
    if (isOfType(type, Types.output)) {
        return 'output';
    }
}
var MarkdownFootnotesParser = (function () {
    function MarkdownFootnotesParser(footnodes) {
        if (footnodes === void 0) { footnodes = []; }
        this.footnodes = footnodes;
    }
    MarkdownFootnotesParser.prototype.extensions = function () {
        return [
            {
                type: Types.output,
                filter: function (text, converter, options) {
                    console.log('footnote parsed\n', text);
                    return text;
                }
            }
        ];
    };
    MarkdownFootnotesParser.prototype.toConverterOptions = function () {
        var exts = this.extensions();
        var map = function (extension) {
            var tName = typeName(extension.type);
            return __assign({}, extension, { type: tName });
        };
        return function MarkdownFootnotesExtension() {
            return exts.map(function (extension) { return map(extension); });
        };
    };
    return MarkdownFootnotesParser;
}());
export { MarkdownFootnotesParser };
//# sourceMappingURL=MarkdownFootnotes.class.js.map