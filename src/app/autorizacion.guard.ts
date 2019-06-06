import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './servicios/data.service';




@Injectable({
  providedIn: 'root'
})
export class AutorizacionGuard implements CanActivate {
  constructor(private dataService: DataService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.dataService.activaMenu;
    }

}
