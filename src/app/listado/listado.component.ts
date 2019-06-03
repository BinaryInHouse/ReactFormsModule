import { DataService } from '../servicios/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  data: Array<IReceta>
  @Output() onCambiarVista: EventEmitter<number> = new EventEmitter<number>()

  constructor(private dataService: DataService, private ruta: Router) { }

  ngOnInit() {
    this.data = <Array<IReceta>>this.dataService.listar()

    this.dataService.onCambioData
      .subscribe(
        elementos => this.data = elementos
      )
  }

  nuevaReceta() {
    this.ruta.navigate(["/agregar"])
    //this.onCambiarVista.emit(3)
  }

  finalizar(num) {
    this.onCambiarVista.emit(num)
  }

}
