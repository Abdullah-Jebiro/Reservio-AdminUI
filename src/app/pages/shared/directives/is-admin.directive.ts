import { Directive, ElementRef, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Directive({
  selector: '[ngxIsAdmin]'
})
export class IsAdminDirective implements OnInit {
  constructor(
    private elementRef: ElementRef,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    const userRoles = this.userService.getUserRoles();
    console.table(userRoles);
    if (!userRoles.includes('SuperAdmin')) {
      this.elementRef.nativeElement.style.display = 'none';
      this.elementRef.nativeElement.style.color = 'red';
    }
  }
}
