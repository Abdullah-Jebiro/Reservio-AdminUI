import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { PatientDto } from '../Model/patientDto';
import { catchError } from 'rxjs/operators';
import { PatientInformationCreation } from '../Model/PatientInformationCreation';

@Injectable({
  providedIn: 'root'
})
export class PatientInformationService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  addInformation(patientId: number, formData: FormData): Observable<any> {
    const url = `${this.apiUrl}Patients/${patientId}/PatientInformation`;
    return this.http.post<any>(url, formData).pipe(catchError(this.handleError));
  }

  getPatientInformation(patientsId:number): Observable<any[]> {
    let url = `${this.apiUrl}Patients/${patientsId}/PatientInformation`;
    return this.http.get<any[]>(url)
      .pipe(catchError(this.handleError));
  };

  getPatientInformationById(patientId: number,informationId:number): Observable<PatientDto> {
    return this.http.get<any>(`${this.apiUrl}Patients/${patientId}/PatientInformation/${informationId}`)
      .pipe(catchError(this.handleError))
  };
  
  downloadFile(patientId: number,attachedFilePath:string): Observable<Blob> {
    const url = `${this.apiUrl}Patients/${patientId}/PatientInformation/File/${attachedFilePath}`;
    return this.http.get(url, {
      responseType: 'blob',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }




  updateInformation(patientId:number,data: any): Observable<PatientDto> {
    const url = `${this.apiUrl}Patients/${patientId}/PatientInformation`;
    return this.http.put<any>(url, data).pipe(catchError(this.handleError));
  }



  deleteInformation(patientId: number,informationId:number): Observable<void> {
    const url = `${this.apiUrl}Patients/${patientId}/PatientInformation/${informationId}`;
    return this.http.delete<void>(url)
      .pipe(catchError(this.handleError));
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
