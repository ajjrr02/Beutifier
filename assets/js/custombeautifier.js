//
// =========================================================
// * * WEB, Code Beautifier - v1.3 - v1.1
// =========================================================
// * Coded by AJ|Dev
// =========================================================
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


var beautifyConfig = {
    javascript: {
        indent_size: 4,
        indent_char: ' ',
        indent_with_tabs: false,
        eol: "\n",
        end_with_newline: false,
        indent_level: 0,
        preserve_newlines: true,
        max_preserve_newlines: 10,
        space_in_paren: false,
        space_in_empty_paren: false,
        jslint_happy: false,
        space_after_anon_function: false,
        brace_style: 'collapse',
        unindent_chained_methods: false,
        break_chained_methods: false,
        keep_array_indentation: false,
        unescape_strings: false,
        wrap_line_length: 0,
        e4x: false,
        comma_first: false,
        operator_position: 'before-newline'
    },
    css: {
        indent_size: 4,
        indent_char: ' ',
        indent_with_tabs: false,
        end_with_newline: false,
        selector_separator_newline: false,
        newline_between_rules: false
    },
    html: {
        indent_size: 4,
        indent_char: ' ',
        indent_with_tabs: false,
        eol: "\n",
        end_with_newline: false,
        preserve_newlines: true,
        max_preserve_newlines: 10,
        indent_inner_html: false,
        brace_style: 'collapse',
        indent_scripts: 'keep',
        wrap_line_length: 0,
        wrap_attributes: 'auto',
        wrap_attributes_indent_size: 250,
        inline: false,
        unformatted: false,
        content_unformatted: false,
        extra_liners: false
    }
};

var value = '';
var result = '';
var mode = 'css';

var pageURL = $(location).attr("href");
if (pageURL.indexOf('js-beautifier') != -1) {
    this.mode = 'javascript';
} else if (pageURL.indexOf('html-beautifier') != -1) {
    this.mode = 'text/html';
} else {
    this.mode = 'css';
}


function beautifyValue() {
    if (this.mode == 'css')
        this.result = css_beautify(this.value, window.beautifyConfig.css);
    else if (this.mode == 'javascript')
        this.result = js_beautify(this.value, window.beautifyConfig.javascript);
    else if (this.mode == 'text/html')
        this.result = html_beautify(this.value, window.beautifyConfig.html);

    window.editorBoxView.setOption("value", this.result);
    this.generateUrlExport()
}

function getValueOfEditor(value) {
    this.value = value
}

function copy() {
    window.copyClip(this.result)
}

function generateUrlExport() {
    $('#exportUrl').attr("href", window.generateUrl(this.result));
}


if (typeof window !== "undefined") {
    window.editorBox = window["CodeMirror"](
        document.getElementById('editorBox'), {
            theme: currentTheme,
            mode: mode,
            lineNumbers: true
        }
    );

    window.editorBox.on("change", obj => {
        this.value = obj.getValue();
    });

    window.editorBoxView = window["CodeMirror"](
        document.getElementById('editorBoxView'), {
            theme: currentTheme,
            mode: mode,
            readOnly: true,
            lineNumbers: true
        }
    );


}

$.each(this.beautifyConfig.css, function(key, value) {
    var item = $('input[name=' + key + ']');
    var type = item.attr('type');

    switch (type) {
        case 'checkbox':
            item.prop('checked', value);
            item.change(function() {
                window.beautifyConfig.css[key] = $(this).prop("checked");
            });
            break;
        default:
            item.val(value);
            item.change(function() {
                window.beautifyConfig.css[key] = this.value;
            });

    }
});