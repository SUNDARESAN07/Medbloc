import { Component, OnInit } from '@angular/core';
import { CompanyData } from './data/company-data';
import { CompanyService } from './data/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
   companies:CompanyData[]=[];
  constructor(private service:CompanyService) { }

  ngOnInit(): void {
    this.companies=this.service.getCompanyList();
  }

}
