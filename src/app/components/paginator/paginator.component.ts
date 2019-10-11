import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator-nav',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit, OnChanges {
  // Input() indica que la variable con esta anotacion sera inyectada (recibira su valor)
  // desde otro componente
  @Input() paginador: any;
  paginas: number[];
  desde: number;
  hasta: number;

  constructor() { }

  ngOnInit() {
    this.initPaginator();
  }

  ngOnChanges(changes: SimpleChanges) {
    let paginadorActualizado = changes['paginador'];
    if (paginadorActualizado.previousValue) {
      this.initPaginator();
    }
  }

  private initPaginator(): void {
    this.desde = Math.min(Math.max(1, this.paginador.number - 4), this.paginador.totalPages - 5);
    this.desde = Math.max(Math.min(this.paginador.totalPages, this.paginador.number + 4), 6);
    if (this.paginador.totalPages > 5) {
      this.paginas = new Array(this.hasta - this.desde + 1).fill(0).map(
        (valor, indice) => indice + this.desde);

    } else {
      this.paginas = new Array(this.paginador.totalPages).fill(0).map(
        (valor, indice) => indice + 1);
    }
  }

}