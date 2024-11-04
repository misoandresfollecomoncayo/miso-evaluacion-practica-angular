import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { CafesListarComponent } from './cafes-listar.component';
import { Cafe } from '../cafe';
import { CafesService } from '../cafes.service';

describe('CafesListarComponent', () => {
  let component: CafesListarComponent;
  let fixture: ComponentFixture<CafesListarComponent>;
  let cafesMock: Array<Cafe> = [];
  let cafesService: CafesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafesListarComponent],
      imports: [HttpClientTestingModule],
      providers: [CafesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CafesListarComponent);
    component = fixture.componentInstance;
    cafesService = TestBed.inject(CafesService);
    fixture.detectChanges();
  });

  beforeEach(()=>{
    cafesMock = 
    [
      {
          "id": 1,
          "nombre": "Café Especial para tí",
          "tipo": "Blend",
          "region": "Angelópolis, Antioquia",
          "sabor": "Panela, Durazno, Caramelo",
          "altura": 1920,
          "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-para-ti-colores-cafe-colombiano-f_1_720x.jpg"
      },
      {
          "id": 2,
          "nombre": "Café Especial Navegante",
          "tipo": "Café de Origen",
          "region": "Guatapé, Antioquia",
          "sabor": "Cítrico, Naranja, Cacao",
          "altura": 1800,
          "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-navegante-cafe-colombiano-f_540x.png"
      },
      {
          "id": 3,
          "nombre": "Café Especial El Prístino",
          "tipo": "Blend",
          "region": "Chinchiná, Caldas",
          "sabor": "Chocolate negro, Caramelo",
          "altura": 1700,
          "imagen": "https://cdn.shopify.com/s/files/1/0272/2873/3504/products/cafe-especial-pristino-1-cafe-colombiano-f_720x.png"
      }
    ];
    spyOn(cafesService, 'getCafes').and.returnValue(of(cafesMock));
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getCafes, debe devolver una lista con tres cafés', ()=>{
    component.getCafes();
    const cafesResult = component.cafes;
    expect(cafesResult.length).toBe(cafesMock.length);
  });
});

