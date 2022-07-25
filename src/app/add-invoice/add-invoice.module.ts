import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddInvoiceComponent } from './add-invoice.component';
import { AddInvoiceRoutingModule } from './add-invoice-routing.module';
import { NgSelect2Module } from 'ng-select2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ AddInvoiceComponent ],
  imports: [
    CommonModule,
    AddInvoiceRoutingModule,
    NgSelect2Module,
    RouterModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddInvoiceModule { }
