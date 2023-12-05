import { Component } from '@angular/core';
import { InsuranceCompany } from 'src/app/Model/InsuranceCompany';
import { InsuranceCompanyService } from 'src/app/services/InsuranceCompanyService/insurance-company.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent {

  insuranceCompanyList:InsuranceCompany[] =[];
 
  constructor(private companyService:InsuranceCompanyService){}

 

  getAllComapniesData(){
    this.companyService.getAllCompanyData().subscribe(data=>{
      this.insuranceCompanyList = data;
    })
  }
}
