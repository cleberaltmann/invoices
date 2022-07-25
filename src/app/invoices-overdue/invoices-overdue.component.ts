import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
@Component({
  selector: 'app-invoices-overdue',
  templateUrl: './invoices-overdue.component.html',
  styleUrls: ['./invoices-overdue.component.css']
})
export class InvoicesOverdueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    Feather.replace();
  }
}
