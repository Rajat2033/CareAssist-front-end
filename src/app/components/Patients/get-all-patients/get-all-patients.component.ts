import { Component } from '@angular/core';
import { Patients } from '../../../Model/Patients';
import { PatientsService } from 'src/app/services/PatientsService/patients.service';
import { JwtAdminService } from 'src/app/services/AdminService/jwt-admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-patients',
  templateUrl: './get-all-patients.component.html',
  styleUrls: ['./get-all-patients.component.css']
})
export class GetAllPatientsComponent {

  patientList: Patients[] = [];

  constructor(private patientService:PatientsService,private jwtAdminService:JwtAdminService,private router:Router){}

  getAllPatientsData(){
    this.patientService.getAllPatients().subscribe(data=>{
      this.patientList = data;
    })
  }
  logoutAdmin() {
    
    this.jwtAdminService.clearToken();
    this.router.navigate(['/login']);
  }

}
