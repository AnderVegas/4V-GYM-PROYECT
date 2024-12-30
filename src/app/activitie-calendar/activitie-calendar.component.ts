import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { DateService } from '../utils/date.service';

/** @title Datepicker inline calendar example */
@Component({
  selector: 'datepicker-inline',
  templateUrl: 'activitie-calendar.component.html',
  styleUrls: ['activitie-calendar.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatNativeDateModule],
})
export class DatepickerInlineCalendar {
  selected: Date | null = new Date();

  constructor(private dateService: DateService) {}

  // Cuando se selecciona una fecha, actualizamos el servicio
  onDateChange(event: any): void {
    this.dateService.setSelectedDate(event);  // Actualiza la fecha en el servicio
  }
}