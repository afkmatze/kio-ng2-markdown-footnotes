"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var kio_ng2_markdown_extension_1 = require("kio-ng2-markdown-extension");
var footnotes = require("showdown-footnotes");
function kioFootnotes() {
    var footnotesExt = footnotes();
    if (!Array.isArray(footnotesExt)) {
        footnotesExt = [footnotesExt];
    }
    footnotesExt = footnotesExt.map(function (e) { return (__assign({}, e, { type: kio_ng2_markdown_extension_1.ExtensionTypeByName[e.type] })); });
    return footnotesExt.slice();
}
exports.kioFootnotes = kioFootnotes;
//# sourceMappingURL=extension.js.map