"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var extension_1 = require("./extension");
exports.kioFootnotes = extension_1.kioFootnotes;
var MarkdownFootnotes = (function () {
    function MarkdownFootnotes() {
    }
    return MarkdownFootnotes;
}());
MarkdownFootnotes.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [common_1.CommonModule],
                //declarations: [],
                //providers: [ ],
                //entryComponents: [],
                exports: [common_1.CommonModule]
            },] },
];
/** @nocollapse */
MarkdownFootnotes.ctorParameters = function () { return []; };
exports.MarkdownFootnotes = MarkdownFootnotes;
//# sourceMappingURL=module.js.map