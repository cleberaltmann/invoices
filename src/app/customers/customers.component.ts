import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import * as $ from 'jquery';
import { AllModulesService } from '../all-modules.service';
import { ToastrService } from "ngx-toastr";
import { DataTableDirective } from 'angular-datatables';
import { Subject } from "rxjs";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  @ViewChild(DataTableDirective, { static: false })
  customers: any = [];
  errorMessage: string;
  public tempId: any;
  url: any = "customers";
  public dtElement: DataTableDirective;
  public dtOptions: DataTables.Settings = {};
  public dtTrigger: Subject<any> = new Subject();
  
  constructor(private srvModuleService: AllModulesService) {}

  ngOnInit(): void {
    this.dtOptions = {
      // ... skipped ...
      pageLength: 10,
      dom: "lrtip",
    };
    this.getCustomers();
  }

  getCustomers() {
    this.srvModuleService.get(this.url).subscribe((res) => {
        this.customers = res;
      },
    );
  }

  filter() {
    
  }
  deleteCustomer() {
    this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
        this.getCustomers();
    });
  }
  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
