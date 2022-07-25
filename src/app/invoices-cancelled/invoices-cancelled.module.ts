import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesCancelledRoutingModule } from './invoices-cancelled-routing.module';
import { InvoicesCancelledComponent } from './invoices-cancelled.component';


@NgModule({
  declarations: [
    InvoicesCancelledComponent
  ],
  imports: [
    CommonModule,
    InvoicesCancelledRoutingModule
  ]
})
export class InvoicesCancelledModule { }
