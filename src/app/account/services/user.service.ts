import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IForgotPassword } from "../models/IForgotPassword";
import { ILoginInfo } from "../models/ILoginInfo";
import { IRegister } from "../models/IRegister";
import { IResetPassword } from "../models/IResetPassword";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  setToken(token: string | null): void {
    localStorage.setItem("token", token != null ? token : "");
  }

  getToken() {
    return localStorage.getItem("token")?.toString();
  }
  setUserName(userName: string | null): void {
    localStorage.setItem("userName", userName != null ? userName : "");
  }

  getUserName() {
    return localStorage.getItem("userName")?.toString();
  }

  setEmail(email: string | null): void {
    localStorage.setItem("email", email != null ? email : "");
  }

  getEmail() {
    return localStorage.getItem("email")?.toString();
  }

  removeAllLocalStorage() {
    localStorage.clear();
  }

  setUserRoles(roles: string[]): void {
    localStorage.setItem("userRoles", JSON.stringify(roles));
  }

  getUserRoles(): string[] {
    const rolesJson = localStorage.getItem("userRoles");
    return rolesJson ? JSON.parse(rolesJson) : [];
  }

  register(register: IRegister): Observable<any> {
    return this.http
      .post(this.apiUrl + "Account/register ", register)
      .pipe(catchError(this.handleError));
  }

  resetPassword(resetPassword: IResetPassword): Observable<any> {
    console.log(resetPassword);
    return this.http
      .post(this.apiUrl + "Account/reset-password ", resetPassword)
      .pipe(catchError(this.handleError));
  }

  login(loginInfo: ILoginInfo): Observable<any> {
    return this.http
      .post(this.apiUrl + "Account/authenticate", loginInfo)
      .pipe(catchError(this.handleError));
  }

  forgotPassword(forgotPassword: IForgotPassword): Observable<any> {
    return this.http
      .post(this.apiUrl + "Account/forgot-password", forgotPassword)
      .pipe(catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse) {
    const status: number = error.status;

    let errorMessage: string = "";
    if (error.error instanceof ErrorEvent) {
      errorMessage = ` client-side error` + error?.error?.message;
    } else {
      errorMessage = `${
        error?.error?.Message == undefined
          ? error?.message
          : error?.error?.Message
      }`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
