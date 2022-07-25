import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesPaidRoutingModule } from './invoices-paid-routing.module';
import { InvoicesPaidComponent } from './invoices-paid.component';


@NgModule({
  declarations: [
    InvoicesPaidComponent
  ],
  imports: [
    CommonModule,
    InvoicesPaidRoutingModule
  ]
})
export class InvoicesPaidModule { }
