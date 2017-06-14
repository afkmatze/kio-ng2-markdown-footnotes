"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function kioFootnotes() {
    return [
        {
            type: 'lang',
            filter: function filter(text, converter) {
                return text.replace(/^\[\^([\d\w]+)\]:\s*((\n+(\s{2,4}|\t).+)+)$/mg, function (str, name, rawContent, _, padding) {
                    var content = converter.makeHtml(rawContent.replace(new RegExp('^' + padding, 'gm'), ''));
                    return '<div class="footnote" id="footnote-' + name + '"><a href="#footnote-' + name + '"><sup>[' + name + ']</sup></a>:' + content + '</div>';
                });
            }
        },
        {
            type: 'lang',
            filter: function filter(text) {
                return text.replace(/^\[\^([\d\w]+)\]:( |\n)((.+\n)*.+)$/mg, function (str, name, _, content) {
                    return '<span class="footnote collapsed" id="footnote-' + name + '">' + content + '</span>';
                });
            }
        }, {
            type: 'lang',
            filter: function filter(text) {
                return text.replace(/\[\^([\d\w]+)\]/m, function (str, name) {
                    return '<a class="footnote-anchor footnote-head" href="#footnote-' + name + '"><strong>[' + name + ']</strong></a>';
                });
            }
        }
    ];
}
exports.kioFootnotes = kioFootnotes;
//# sourceMappingURL=extension.js.map