import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  EventEmitter,
} from '@angular/core';
import { nextDate, nextMonth, nextYear } from 'src/app/utils/time';

const DATE_HEIGHT = 9;
const DATE_LENGTH = 9;
const MIDDLE_INDEX = Math.floor(DATE_LENGTH / 2);
const MIDDLE_Y = -DATE_HEIGHT * MIDDLE_INDEX;

@Component({
  selector: 'date-picker-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.scss'],
})
export class WheelComponent implements OnInit, OnChanges {
  @Input() data: Date = new Date();
  @Input() format: string = '';
  @Output() updateDate = new EventEmitter();
  middle: number = 4;
  dates: any[] = [];
  selectedDate: Date = new Date();
  ngOnInit(): void {
    this.initDates(this.data);
    this.selectedDate = this.data;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.initDates(this.data);
    this.selectedDate = this.data;
  }

  initDates(date: Date) {
    // const typeName =

    const dates = Array(...Array(DATE_HEIGHT)).map((value, index) => {
      if (this.format === 'yyyy') {
        return nextYear(date, (index - MIDDLE_INDEX) * 1);
      } else if (this.format === 'MMM') {
        return nextMonth(date, (index - MIDDLE_INDEX) * 1);
      } else {
        return nextDate(date, (index - MIDDLE_INDEX) * 1);
      }
    });
    this.dates = dates;
  }

  onDateClick(index: number) {
    this.updateDate.emit(this.dates[index]);
    this.initDates(this.dates[index]);
    // this.middle = index;
  }
}
