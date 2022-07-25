import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesDraftRoutingModule } from './invoices-draft-routing.module';
import { InvoicesDraftComponent } from './invoices-draft.component';


@NgModule({
  declarations: [
    InvoicesDraftComponent
  ],
  imports: [
    CommonModule,
    InvoicesDraftRoutingModule
  ]
})
export class InvoicesDraftModule { }
