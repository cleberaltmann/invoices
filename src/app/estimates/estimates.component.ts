import { Component, OnInit } from '@angular/core';
import { AllModulesService } from '../all-modules.service';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.css'],
})
export class EstimatesComponent implements OnInit {
  estimates: any = [];
  errorMessage: string;
  url: any = "estimates";
  public tempId: any;
  constructor(private srvModuleService: AllModulesService) {}

  ngOnInit(): void {
    this.getEstimates();
  }

  getEstimates() {
    this.srvModuleService.get(this.url).subscribe((res) => {
      this.estimates = res;
    },
  );
  }
  deleteEstimates() {
    this.srvModuleService.delete(this.tempId, this.url).subscribe((data) => {
        this.getEstimates();
    });
  }
}
