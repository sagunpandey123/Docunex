import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PagesComponent } from './pages.component';

describe('PagesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        PagesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(PagesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'docunex'`, () => {
    const fixture = TestBed.createComponent(PagesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('docunex');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(PagesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to docunex!');
  });
});

