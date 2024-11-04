import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafesService } from '../cafes.service';

@Component({
  selector: 'app-cafes-listar',
  templateUrl: './cafes-listar.component.html',
  styleUrls: ['./cafes-listar.component.css']
})
export class CafesListarComponent implements OnInit {
  public cafes: Array<Cafe> = [];

  constructor(private cafesService: CafesService) { }

  ngOnInit() {
    this.getCafes();
  }

  getCafes(): void {
    this.cafesService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
    });
  }

  getTotalCafeOrigen(): number {
    return this.cafes.filter(cafe => cafe.tipo === "Café de Origen").length;
  }

  getTotalCafeBlend(): number {
    return this.cafes.filter(cafe => cafe.tipo === "Blend").length;
  }

}
