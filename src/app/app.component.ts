import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Date Picker';
  today: Date = new Date();

  updateDate(newDate: Date) {
    this.today = newDate;
  }
}
