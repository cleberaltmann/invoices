import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesRecurringRoutingModule } from './invoices-recurring-routing.module';
import { InvoicesRecurringComponent } from './invoices-recurring.component';


@NgModule({
  declarations: [
    InvoicesRecurringComponent
  ],
  imports: [
    CommonModule,
    InvoicesRecurringRoutingModule
  ]
})
export class InvoicesRecurringModule { }
