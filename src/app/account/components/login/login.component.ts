import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SubSink } from 'subsink';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit , OnDestroy {
  loginForm!: FormGroup;
  isLoading: boolean = false;

  private subs = new SubSink();

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }



  onSubmit(): void {
    this.isLoading = true;
    //This function only works when the from is valid
    this.subs.sink = this.userService.login(this.loginForm.value).subscribe({
      next: (result) => {
        this.userService.setToken(result.data.jwToken);
        this.userService.setUserRoles(result.data.roles);
        this.userService.setUserName(result.data.userName);
        this.router.navigate(['/pages']);
        this.isLoading = false;
      },
      error: (err) => {
        this.toastrService.error("The username or password is incorrect, please try again.", '', {
          timeOut: 5000,
        });
        this.isLoading = false;
      },
    });
  }
}
