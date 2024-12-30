import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline',
  templateUrl: 'activitie-calendar.component.html',
  styleUrls: ['activitie-calendar.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class DatepickerInlineCalendarExample {
  selected: Date | null;

  constructor() {
    this.selected = null; // o inicializa con un valor por defecto
  }
}