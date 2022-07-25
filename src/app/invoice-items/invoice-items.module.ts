import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceItemsRoutingModule } from './invoice-items-routing.module';
import { InvoiceItemsComponent } from './invoice-items.component';


@NgModule({
  declarations: [
    InvoiceItemsComponent
  ],
  imports: [
    CommonModule,
    InvoiceItemsRoutingModule
  ]
})
export class InvoiceItemsModule { }
