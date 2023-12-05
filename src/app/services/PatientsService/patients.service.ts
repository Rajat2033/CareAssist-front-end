import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Patients } from 'src/app/Model/Patients';
import { JwtPatientService } from './jwt-patient.service';
import { JwtAdminService } from '../AdminService/jwt-admin.service';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {



  adminURL: string = 'http://localhost:8080/api/v1/patients';

  constructor(private http: HttpClient,private jwtPatient:JwtPatientService,private jwtAdmin:JwtAdminService) { }


  getAllPatients(): Observable<Patients[]> {
    const token = this.jwtAdmin.getToken();

    console.log(token);
    if (token) {
      const tokenString = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenString);

     
      console.log(headers);
      return this.http.get<Patients[]>(this.adminURL + '/get/allPatients', { headers});
      }
      else{
        return new Observable<Patients[]>;
      }
   
    

  }
}





