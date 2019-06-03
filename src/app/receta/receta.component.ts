import { DataService } from '../servicios/data.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: IReceta
  @Input() indice: number

  @Output() onFinalizar: EventEmitter<number> = new EventEmitter<number>()

  constructor(private dataService: DataService, private ruta: Router) { }

  ngOnInit() {
  }

  eliminar() {
    this.dataService.eliminarItem(this.indice)
  }

  modificar() {
    this.ruta.navigate(["/modificar", this.indice])
    //this.onFinalizar.emit(4)
  }

}
