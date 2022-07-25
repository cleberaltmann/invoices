import { Component, OnInit } from '@angular/core';
import { AllModulesService } from '../all-modules.service';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
})

export class ExpensesComponent implements OnInit {
  expeses: any = [];
  errorMessage: string;
  url: any = "expenses";
  public tempId: any;
  constructor(private srvModuleService: AllModulesService) {}

  ngOnInit(): void {    
    this.getExpenses();
  }
  getExpenses() {
    this.srvModuleService.get(this.url).subscribe((res) => {
      this.expeses = res;
    },
  );
  }
  deleteExpenses() {
    this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
        this.getExpenses();
    });
  }
}
