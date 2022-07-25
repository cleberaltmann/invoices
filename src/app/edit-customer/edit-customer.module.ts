import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCustomerRoutingModule } from './edit-customer-routing.module';
import { EditCustomerComponent } from './edit-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditCustomerComponent
  ],
  imports: [
    CommonModule,
    EditCustomerRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditCustomerModule { }
