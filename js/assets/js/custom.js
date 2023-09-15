//
// =========================================================
// * * WEB, Code Beautifier - v1.3 - v1.1
// =========================================================
// * Coded by AJ|Dev
// =========================================================
// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.


var defaultTheme = 'dracula';
if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', this.defaultTheme)
}


// Setting Page
var currentTheme = this.localStorage.getItem('theme');
$('[name=SelectTheme]').val(currentTheme);

$('[name=SelectTheme]').change(function() {
    var selectedTheme = $(this).val();
    localStorage.setItem('theme', selectedTheme);

    window.editor.setOption('theme', selectedTheme);
});

var demoCode = `import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CompileComponent } from './compile.component';
  
describe('CompileComponent', () => {
  let component: CompileComponent;
  let fixture: ComponentFixture<CompileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});`;

var config = {
    theme: currentTheme,
    value: demoCode,
    readOnly: true,
    mode: 'javascript',
    lineNumbers: true
}

if (typeof window !== "undefined") {
    window.editor = window["CodeMirror"](
        document.getElementById('editor'),
        config
    );
}


// Common Function

function copyClip(result) {
    let input = document.createElement('textarea');
    document.body.appendChild(input);
    input.value = result.replace(/\n/g, '\r\n')
    input.select();
    document.execCommand('copy', false);
    input.remove();
}

function generateUrl(result) {
    let blob = new Blob([result.replace(/\n/g, '\r\n')], {
        type: 'text/plain'
    })
    return window.URL.createObjectURL(blob)
}