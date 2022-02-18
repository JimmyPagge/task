import { Currency } from "./../model/currency";
import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-currency-selector",
  templateUrl: "./currency-selector.component.html",
  styleUrls: ["./currency-selector.component.css"],
})
export class CurrencySelectorComponent {
  selectedValue: Currency;
  @Input() currencies: Currency[] = [];
  @Output() onSelect = new EventEmitter<Currency>();

  selectCurrency(): void {
    this.onSelect.emit(this.selectedValue);
  }
}
