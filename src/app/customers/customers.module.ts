import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './customers.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ CustomersComponent ],
  imports: [CommonModule, CustomersRoutingModule, DataTablesModule,RouterModule,ReactiveFormsModule,FormsModule],
})
export class CustomersModule {}
