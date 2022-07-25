import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { AllModulesService } from '../all-modules.service';

@Component({
  selector: 'app-invoice-reports',
  templateUrl: './invoice-reports.component.html',
  styleUrls: ['./invoice-reports.component.css'],
})
export class InvoiceReportsComponent implements OnInit {
  invoices: any = [];
  errorMessage: string;
  url: any = "invoices";
  public tempId: any;
  dtOptions: DataTables.Settings = {};

  constructor(private srvModuleService: AllModulesService) {}

  ngOnInit(): void {
    this.getInvoices();
  }

  getInvoices() {
    this.srvModuleService.get(this.url).subscribe((res) => {
      this.invoices = res;
    },
  );
  }
  deleteInvoice() {
    this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
        this.getInvoices();
    });
  }
}
