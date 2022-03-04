import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WheelComponent } from './wheel/wheel.component';
import { DatePickerComponent } from './main/date-picker.component';

@NgModule({
  declarations: [WheelComponent, DatePickerComponent],
  imports: [CommonModule],
  exports: [WheelComponent, DatePickerComponent],
})
export class DatePickerModule {}
