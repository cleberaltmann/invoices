import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-invoices-recurring',
  templateUrl: './invoices-recurring.component.html',
  styleUrls: ['./invoices-recurring.component.css']
})
export class InvoicesRecurringComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    Feather.replace();
  }
}
