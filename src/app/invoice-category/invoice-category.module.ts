import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceCategoryRoutingModule } from './invoice-category-routing.module';
import { InvoiceCategoryComponent } from './invoice-category.component';


@NgModule({
  declarations: [
    InvoiceCategoryComponent
  ],
  imports: [
    CommonModule,
    InvoiceCategoryRoutingModule
  ]
})
export class InvoiceCategoryModule { }
