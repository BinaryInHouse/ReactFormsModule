import { AbstractControl } from "@angular/forms";

export class CustomValidator {
  static emailValidator(control): any {
    if (control && control.value) {
      const regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      if (!regex.test(control.value)) {
        console.log("No valido: " + control.value);
        return { isError: true };
      }
    }
    return null;
  }

  static lettersSpace(control): any {
    if (control && control.value) {
      const regex = /[A-Za-z ñ]+/;

      if (!regex.test(control.value)) {
        console.log("No valido: " + control.value);
        return { isError: true };
      }
    }
    return null;
  }
}
