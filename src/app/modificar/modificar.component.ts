import { Component, OnInit } from '@angular/core';
import { IReceta } from '../modelos/receta';

import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../servicios/data.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  receta: IReceta = { titulo: "", descripcion: "" }

  id: number

  constructor(private rutaActiva: ActivatedRoute, private dataService: DataService, private ruta: Router) { }

  ngOnInit() {
    this.id = +this.rutaActiva.snapshot.paramMap.get("id")

    this.receta = this.dataService.editar(this.id)
  }

  guardar() {
    this.dataService.modificar(this.receta, this.id)
    this.ruta.navigate(["/listado"])
  }

}
