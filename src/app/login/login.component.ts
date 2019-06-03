import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl} from '@angular/forms';
import { CustomValidator } from '../formValidator';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  grupo: FormGroup

  usuario: string
  contrasena: string
  mostrar: boolean = true

  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>()

  constructor(private ruta: Router, private fb: FormBuilder) { }

  ngOnInit() {
    /*
    this.grupo = this.fb.group({
      usuario: new FormControl (null, [Validators.required, CustomValidator.emailValidator ]),
      contrasena : new FormControl (null, [Validators.required, Validators.maxLength(5)])
         })*/
      this.grupo = new FormGroup({
      usuario: new FormControl(null, [Validators.required, CustomValidator.emailValidator]),
      contrasena : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      confirmar: new FormControl(null, this.validarConfirmacion)
    })
  }

  capturarUsuario(value: string) {
    this.usuario = value
    console.log(this.usuario);
  }

  capturarContrasena(value: string) {
    this.contrasena = value
    console.log(this.contrasena);
  }

  ingresar() {
    this.ruta.navigate(["/listado"])
    /* alert(this.usuario + " " + this.contrasena) */
    //this.onLogin.emit()
  }

  login(){
   if ( this.grupo.valid){
     alert('Formulario valido')
     console.log(this.grupo.value);
     console.log(this.grupo.controls.emailValidator);
     console.log(this.grupo.getRawValue());
   }else{
     alert('Formulario no valido')
   }
  }

  validarConfirmacion(control: AbstractControl): { [s: string]: boolean } {

    if (!control || !control.parent) return null

    const contrasena = control.parent.get("contrasena")
    const confirmar = control.parent.get("confirmar")

    if (!contrasena || !confirmar) return null

    if (confirmar.value === "") return null

    if (contrasena.value === confirmar.value) return null

    return { confirmacionInvalida: true }

  }


}
