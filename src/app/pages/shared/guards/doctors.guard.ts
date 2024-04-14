import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../account/services/user.service';
import { Injectable } from '@angular/core';
import { Roles } from '../Roles';


@Injectable({
  providedIn: 'root'
})
export class DoctorsGuard implements CanLoad {
  constructor(private service: UserService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.service.getToken()?.length) {
      this.router.navigate(['./account']);
      return false;
    }

    const userRoles = this.service.getUserRoles();
    console.log(userRoles.includes(Roles.Doctors.toString()));
    console.log(userRoles);
    console.log(Roles.Doctors.toString());
    if (userRoles.includes(Roles.SuperAdmin.toString()) || userRoles.includes(Roles.Admin.toString()) || userRoles.includes(Roles.Doctors.toString())) {
      return true;
    } 
    else {
      this.router.navigate(["/pages/miscellaneous/404"]);
      return false;
    }
  }
}



