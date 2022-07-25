import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEstimateRoutingModule } from './edit-estimate-routing.module';
import { EditEstimateComponent } from './edit-estimate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    EditEstimateComponent
  ],
  imports: [
    CommonModule,
    EditEstimateRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EditEstimateModule { }
