import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditInvoiceRoutingModule } from './edit-invoice-routing.module';
import { EditInvoiceComponent } from './edit-invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EditInvoiceComponent
  ],
  imports: [
    CommonModule,
    EditInvoiceRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class EditInvoiceModule { }
