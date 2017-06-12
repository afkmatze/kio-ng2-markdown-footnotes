import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownFootnotesParser } from './classes/MarkdownFootnotes.class';
export { kioFootnotes } from './extension';
var MarkdownFootnotes = (function () {
    function MarkdownFootnotes() {
    }
    MarkdownFootnotes.forRoot = function () {
        return {
            ngModule: MarkdownFootnotes,
            providers: [
                {
                    provide: MarkdownFootnotesParser,
                    useClass: MarkdownFootnotesParser
                }
            ]
        };
    };
    return MarkdownFootnotes;
}());
export { MarkdownFootnotes };
MarkdownFootnotes.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                //declarations: [],
                //providers: [ ],
                //entryComponents: [],
                exports: [CommonModule]
            },] },
];
/** @nocollapse */
MarkdownFootnotes.ctorParameters = function () { return []; };
//# sourceMappingURL=module.js.map