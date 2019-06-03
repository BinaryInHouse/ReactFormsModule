import { Injectable, EventEmitter } from '@angular/core';
import { IReceta } from '../modelos/receta';
import { Generico } from './generico';

@Injectable({
  providedIn: 'root'
})
export class DataService extends Generico {

  onCambioData: EventEmitter<Array<{}>> = new EventEmitter<Array<{}>>()

  private data: Array<IReceta> = []

  constructor() {
    super([
      { titulo: "Arroz con pato", descripcion: "plato tradicional norteño" },
      { titulo: "Picante de cuy", descripcion: "plato típico de la sierra" },
      { titulo: "Tacacho con cecina", descripcion: "plato típico de la selva" }
    ])
  }

  /* listar(): Array<IReceta> {
    return this.data
  } */

  eliminarItem(indice: number): void {
    if (confirm("¿Está seguro?")) {
      this.eliminar(indice)
      //this.data.splice(indice, 1)
    }
    this.onCambioData.emit(this.listar())
  }

  agregar(receta: IReceta) {
    //this.data.push(receta)
    this.insertar(receta)
    this.onCambioData.emit(this.listar())
  }

  editar(id: number): IReceta {
    /*  const receta = Object.assign({}, this.data[id])
     return receta */
    return <IReceta>this.detallar(id)
  }

  /*   modificar(id: number, receta: IReceta) {
      this.data[id] = receta
    } */
}
