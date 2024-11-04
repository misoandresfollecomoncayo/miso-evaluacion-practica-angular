import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CafesListarComponent } from './cafes/cafes-listar/cafes-listar.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      declarations: [
        AppComponent, CafesListarComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'MISO - Evaluación Práctica Angular' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MISO - Evaluación Práctica Angular');
  });
});
