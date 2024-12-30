import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  private selectedDateSource = new BehaviorSubject<Date>(new Date());  // Fecha inicial es la actual
  selectedDate$ = this.selectedDateSource.asObservable(); // Exponemos como Observable

  constructor() { }

  setSelectedDate(date: Date): void {
    this.selectedDateSource.next(date); // Actualiza la fecha seleccionada
  }

  nextDate(): void {
    const currentDate = this.selectedDateSource.value;
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);  // Sumar un día
    this.selectedDateSource.next(nextDay);  // Emitir el nuevo valor
  }

  // Actualiza la fecha seleccionada al día anterior
  previousDate(): void {
    const currentDate = this.selectedDateSource.value;
    const previousDay = new Date(currentDate);
    previousDay.setDate(currentDate.getDate() - 1);  // Restar un día
    this.selectedDateSource.next(previousDay);  // Emitir el nuevo valor
  }
}
