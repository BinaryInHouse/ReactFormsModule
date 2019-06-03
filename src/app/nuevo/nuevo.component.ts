import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IReceta } from "../modelos/receta";
import { DataService } from "../servicios/data.service";
import { Router } from "@angular/router";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import { CustomValidator } from "../formValidator";

@Component({
  selector: "app-nuevo",
  templateUrl: "./nuevo.component.html",
  styleUrls: ["./nuevo.component.css"]
})
export class NuevoComponent implements OnInit {
  grupo: FormGroup;

  receta: IReceta = { titulo: "", descripcion: "" };

  @Output() onFinalizar: EventEmitter<number> = new EventEmitter<number>();

  constructor(
    private dataService: DataService,
    private ruta: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.grupo = new FormGroup({
      titulo: new FormControl(null, [
        Validators.required,
        CustomValidator.lettersSpace,
        Validators.minLength(5)
      ]),
      descripcion: new FormControl(null, [
        Validators.required,
        CustomValidator.lettersSpace,
        Validators.minLength(5)
      ])
    });
  }

  guardar() {
    if (this.grupo.valid) {
      this.dataService.agregar(this.receta);
      this.ruta.navigate(["/listado"]);
    } else {
      alert("Datos incorrectos");
    }

    //this.onFinalizar.emit(2)
  }
}
