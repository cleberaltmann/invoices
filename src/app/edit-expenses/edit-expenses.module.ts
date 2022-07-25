import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditExpensesRoutingModule } from './edit-expenses-routing.module';
import { EditExpensesComponent } from './edit-expenses.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EditExpensesComponent
  ],
  imports: [
    CommonModule,
    EditExpensesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class EditExpensesModule { }
