import { Component, OnInit } from '@angular/core';
import { DatepickerInlineCalendar } from '../activitie-calendar/activitie-calendar.component';
import { CommonModule } from '@angular/common';  // Para usar pipes como 'date'
import { DateService } from '../utils/date.service';
import { EntitiesService, Activity } from '../utils/entities.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [DatepickerInlineCalendar, CommonModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent implements OnInit {
  selectedDate: Date | null = null;  // Guardará la fecha seleccionada
  activities: Activity[] = []; // Lista de actividades
  timeSlots = ['10:00 11:30', '13:30 15:00', '17:30 19:00']; // Horarios fijos

  constructor(
    private dateService: DateService,
    private entitiesService: EntitiesService
  ) {}

  ngOnInit(): void {
    // Nos suscribimos al servicio para obtener la fecha seleccionada
    this.dateService.selectedDate$.subscribe(date => {
      this.selectedDate = date;
    });

    // Obtener actividades del servicio
    this.activities = this.entitiesService.getActivitys();
  }

  // Comprobar si hay una actividad en un horario específico
  getActivityForSlot(slot: string): Activity | null {
    if (!this.selectedDate) return null;

    const selectedDateString = this.selectedDate.toLocaleDateString('en-GB'); // Formato "dd/MM/yyyy"
    const slotDateTime = `${selectedDateString}, ${slot}`;

    return this.activities.find(activity => activity.fecha === slotDateTime) || null;
  }

  // Cambia la fecha al siguiente día
  nextDate(): void {
    this.dateService.nextDate();
  }

  // Cambia la fecha al día anterior
  previousDate(): void {
    this.dateService.previousDate();
  }
}
