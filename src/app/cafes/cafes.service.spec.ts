import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CafesService } from './cafes.service';
import { Cafe } from './cafe';

describe('ActorService', () => {
  let service: CafesService;
  let httpTestingController: HttpTestingController;
  let cafesMock: Array<Cafe> = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CafesService);
    httpTestingController = TestBed.inject(HttpTestingController);
    httpTestingController.verify();

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
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCafes, validar que lleguen los datos mock al servicio', ()=>{
    service.getCafes().subscribe(cafes => {
      expect(cafes).toEqual(cafesMock);
    });

    const req = httpTestingController.expectOne('https://gist.githubusercontent.com/josejbocanegra/e9d24db370ce95b75555f7d1f8691805/raw/8a26ac2bca4183dc88545e14c45851d698911358/202212_MISW4104_Grupo3.json'); 
    expect(req.request.method).toBe('GET'); 
    req.flush(cafesMock);
  });

});
