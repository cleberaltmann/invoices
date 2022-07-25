import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-invoices-paid',
  templateUrl: './invoices-paid.component.html',
  styleUrls: ['./invoices-paid.component.css']
})
export class InvoicesPaidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    Feather.replace();
  }
}
