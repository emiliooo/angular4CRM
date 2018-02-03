import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrls: ['./total-cost.component.less']
})
export class TotalCostComponent implements OnInit {

  @Input() totalCost: number;
  @Output() shownGross: EventEmitter<number> = new EventEmitter<number>();
  private vat: number = 1.23;

  showGross(): void {
    this.shownGross.emit(this.totalCost);

  }

  constructor() {

  }

  ngOnInit() {
  }
  
}
