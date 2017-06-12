import { ExtensionTypes } from 'kio-ng2-markdown-extension';
export function kioFootnotes() {
    return [
        {
            type: ExtensionTypes.lang,
            filter: function (source, converter, options) {
                console.log('filter source: "%s"', source);
                return source;
            }
        }
    ];
}
//# sourceMappingURL=extension.js.map