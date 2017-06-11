import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
export { MainModule };
MainModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                //declarations: [],
                //providers: [ ],
                //entryComponents: [],
                exports: [CommonModule]
            },] },
];
/** @nocollapse */
MainModule.ctorParameters = function () { return []; };
export function forRoot() {
    return {
        ngModule: MainModule,
        providers: []
    };
}
//# sourceMappingURL=module.js.map