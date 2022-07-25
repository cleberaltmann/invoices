import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoicesSettingsRoutingModule } from './invoices-settings-routing.module';
import { InvoicesSettingsComponent } from './invoices-settings.component';


@NgModule({
  declarations: [
    InvoicesSettingsComponent
  ],
  imports: [
    CommonModule,
    InvoicesSettingsRoutingModule
  ]
})
export class InvoicesSettingsModule { }
