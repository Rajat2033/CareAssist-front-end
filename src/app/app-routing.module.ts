import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPatientsComponent } from './components/Patients/register-patients/register-patients.component';
import { UpdatePatientsComponent } from './components/Patients/update-patients/update-patients.component';
import { RegisterCompanyComponent } from './components/InsuranceCompany/register-company/register-company.component';
import { UpdateCompanyComponent } from './components/InsuranceCompany/update-company/update-company.component';
import { AddInsurancePlanComponent } from './components/InsurancePlans/add-insurance-plan/add-insurance-plan.component';
import { RegisterProviderComponent } from './components/HealthcareProvider/register-provider/register-provider.component';
import { GetAllPatientsComponent } from './components/Patients/get-all-patients/get-all-patients.component';
import { GetAllCompaniesComponent } from './components/InsuranceCompany/get-all-companies/get-all-companies.component';
import { GetAllInsurancePlansComponent } from './components/InsurancePlans/get-all-insurance-plans/get-all-insurance-plans.component';
import { GenerateInvoiceComponent } from './components/InvoiceDetails/generate-invoice/generate-invoice.component';
import { GetAllInvoicesComponent } from './components/InvoiceDetails/get-all-invoices/get-all-invoices.component';
import { UpdateProviderComponent } from './components/HealthcareProvider/update-provider/update-provider.component';
import { GetAllProvidersComponent } from './components/HealthcareProvider/get-all-providers/get-all-providers.component';
import { GetAllInsuranceClaimsComponent } from './components/InsuranceClaims/get-all-insurance-claims/get-all-insurance-claims.component';
import { UpdateInsuranceClaimComponent } from './components/InsuranceClaims/update-insurance-claim/update-insurance-claim.component';
import { ForgotPasswordComponent } from './components/Login/forgot-password/forgot-password.component';
import { AdmindashboardComponent } from './components/Admin/admindashboard.component';
import { LoginAdminComponent } from './components/Admin/login-admin/login-admin.component';
import { ProviderDashboardComponent } from './components/HealthcareProvider/provider-dashboard/provider-dashboard.component';
import { HomepageComponent } from './components/Homepage/homepage.component';
import { LoginProviderComponent } from './components/HealthcareProvider/login-provider/login-provider.component';
import { LoginPatientComponent } from './components/Patients/login-patient/login-patient.component';
import { LoginCompanyComponent } from './components/InsuranceCompany/login-company/login-company.component';
import { DashboardComponent } from './components/InsuranceCompany/company-dashboard/dashboard.component';
import { PatientDashboardComponent } from './components/Patients/patient-dashboard/patient-dashboard.component';
import { AddNewclaimComponent } from './components/InsuranceClaims/add-newclaim/add-newclaim.component';
import { GetplansBytypeComponent } from './components/InsurancePlans/getplans-bytype/getplans-bytype.component';


const routes: Routes = [
  // { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: '', component: HomepageComponent },
  { path: 'login/admin', component: LoginAdminComponent },
  {path:'login/provider',component:LoginProviderComponent},
  {path:'login/patient',component:LoginPatientComponent},
  {path:'login/company',component:LoginCompanyComponent},
  { path: 'registerpatient', component: RegisterPatientsComponent },
  { path: 'updatepatients/:id', component: UpdatePatientsComponent },

  { path: 'registercompany', component: RegisterCompanyComponent },
  { path: 'companies/:id', component: UpdateCompanyComponent },



  { path: 'add/insuranceplans', component: AddInsurancePlanComponent },
  { path: 'generateinvoice', component: GenerateInvoiceComponent },

  { path: 'registerprovider', component: RegisterProviderComponent },
  { path: 'addprovider', component: RegisterProviderComponent },
  { path: 'updateprovider', component: UpdateProviderComponent },
  { path: 'updateclaim', component: UpdateInsuranceClaimComponent },
  { path: 'admin/dashboard', component: AdmindashboardComponent, children: [{ path: 'getallcompanies', component: GetAllCompaniesComponent }, { path: 'getallpatients', component: GetAllPatientsComponent }, { path: 'getallclaims', component: GetAllInsuranceClaimsComponent }, { path: 'getallproviders', component: GetAllProvidersComponent },
   { path: 'getallplans', component: GetAllInsurancePlansComponent }, { path: 'getallinvoices', component: GetAllInvoicesComponent }] },
  { path: 'forgetpassword', component: ForgotPasswordComponent },
  { path: 'provider/dashboard', component: ProviderDashboardComponent },
  {path:'company/dashboard', component: DashboardComponent},
  {path:'patient/dashboard', component: PatientDashboardComponent,children:[{ path: 'get/planbytype', component: GetplansBytypeComponent },  {path:'add/newclaim', component: AddNewclaimComponent}]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
