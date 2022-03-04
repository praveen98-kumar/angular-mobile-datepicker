import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatePickerModule } from './date-picker/date-picker.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, DatePickerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
