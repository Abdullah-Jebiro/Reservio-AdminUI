import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Vacation } from '../Model/vacation';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { VacationResponse } from '../Model/vacationDTO';
import { VacationAddDto } from '../Model/vacationAddDTo';

@Injectable({
  providedIn: 'root'
})
export class VacationService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }
  getVacations(): Observable<HttpResponse<VacationResponse>> {
    const url = `${this.apiUrl}Vacations`;
    return this.http.get<VacationResponse>(url, { observe: 'response' })
      .pipe(catchError(this.handleError));

  }
  addVaction(createVacation: VacationAddDto): Observable<VacationAddDto> {
    return this.http.post<VacationAddDto>(`${this.apiUrl}Vacations`, createVacation)
      .pipe(catchError(this.handleError));
  }
  deleteVacation(vacationId: number): Observable<void> {
    const url = `${this.apiUrl}Vacations/${vacationId}`;
    return this.http.delete<void>(url)
      .pipe(
        catchError(this.handleError)
      );
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}, Message: ${error?.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
  }
}
