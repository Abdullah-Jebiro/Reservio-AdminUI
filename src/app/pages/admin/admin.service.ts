import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IDeleteRoleRequest } from '../admin/models/IDeleteRoleRequest';
import { IAddRoleRequest } from '../admin/models/IAddRoleRequest';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private apiUrl = environment.apiUrl + 'Admin/';

  constructor(private http: HttpClient) { }

 


  getAllUsersWithRoles(pageName: number = 1, PageSize: number = 50 ,email?: string, ): Observable<HttpResponse<any[]>> {

    const params = {
      pageName: pageName.toString(),
      PageSize: PageSize.toString(),
      email: email || '',

    };
    const httpOptions = {
      withCredentials: true
    };

    return this.http.get<any[]>(this.apiUrl + 'AllUserWithRoles', { params,observe: 'response' , ...httpOptions}).pipe(
      catchError(this.handleError)
    );
  }

  addRoleForUser(request: IAddRoleRequest): Observable<any> {
    return this.http.post(this.apiUrl + 'AddRoleForUser', request).pipe(
      catchError(this.handleError)
    );
  }

  deleteRoleForUser(request: IDeleteRoleRequest): Observable<any> {
    console.log(request);
    
    return this.http.delete(this.apiUrl + 'DeleteRoleForUser', { body: request }).pipe(
      catchError(this.handleError)
    );
  }
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}AllRoles`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status || 500}\nMessage: ${error.error?.Message || error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
