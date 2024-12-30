import { Component, OnInit } from '@angular/core';
import { DatepickerInlineCalendar } from '../activitie-calendar/activitie-calendar.component';
import { CommonModule } from '@angular/common';  // Importar CommonModule para los pipes como 'date'
import { DateService } from '../utils/date.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [DatepickerInlineCalendar, CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent implements OnInit{
  selectedDate: Date | null = null;  // Guardará la fecha seleccionada

  constructor(private dateService: DateService) {}

  ngOnInit(): void {
    // Nos suscribimos al servicio para obtener la fecha seleccionada
    this.dateService.selectedDate$.subscribe(date => {
      this.selectedDate = date;
    });
  }

  // Cambia la fecha al siguiente día
  nextDate(): void {
    this.dateService.nextDate();  // Llama al método del servicio
  }

  // Cambia la fecha al día anterior
  previousDate(): void {
    this.dateService.previousDate();  // Llama al método del servicio
  }
}
