import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-invoices-draft',
  templateUrl: './invoices-draft.component.html',
  styleUrls: ['./invoices-draft.component.css']
})
export class InvoicesDraftComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    Feather.replace();
  }
}
