import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomesearchComponent } from './homesearch.component';

describe('HomesearchComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        HomesearchComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(HomesearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'docunex'`, () => {
    const fixture = TestBed.createComponent(HomesearchComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('docunex');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(HomesearchComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to docunex!');
  });
});

