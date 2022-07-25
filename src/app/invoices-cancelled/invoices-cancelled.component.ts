import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-invoices-cancelled',
  templateUrl: './invoices-cancelled.component.html',
  styleUrls: ['./invoices-cancelled.component.css']
})
export class InvoicesCancelledComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    Feather.replace();
  }
}
