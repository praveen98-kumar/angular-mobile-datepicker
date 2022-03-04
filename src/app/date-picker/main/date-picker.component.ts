import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit, OnChanges {
  @Input() value: Date = new Date();
  @Input() data: Date = new Date();

  formats: string[] = ['dd', 'MMM', 'yyyy'];
  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Main Date Picker Component', this.value);
  }
}
