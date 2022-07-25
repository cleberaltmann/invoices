import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceGridRoutingModule } from './invoice-grid-routing.module';
import { InvoiceGridComponent } from './invoice-grid.component';


@NgModule({
  declarations: [
    InvoiceGridComponent
  ],
  imports: [
    CommonModule,
    InvoiceGridRoutingModule
  ]
})
export class InvoiceGridModule { }
