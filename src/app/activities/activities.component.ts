import { Component, OnInit } from '@angular/core';
import { DatepickerInlineCalendar } from '../activitie-calendar/activitie-calendar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateService } from '../utils/date.service';
import { EntitiesService, Activity, Monitor, ActivityType } from '../utils/entities.service';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [DatepickerInlineCalendar, CommonModule, FormsModule],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent implements OnInit {
  selectedDate: Date | null = null;
  activities: Activity[] = [];
  timeSlots = ['10:00 11:30', '13:30 15:00', '17:30 19:00'];
  isModalOpen = false;
  isEditing = false;
  editingActivityId: number | null = null;
  currentSlot!: string;
  newActivityMonitor1!: Monitor | null;
  newActivityMonitor2!: Monitor | null;
  newActivityType!: ActivityType;
  monitors: Monitor[] = [];
  activityTypes = Object.values(ActivityType);

  constructor(
    private dateService: DateService,
    private entitiesService: EntitiesService
  ) {}

  ngOnInit(): void {
    this.dateService.selectedDate$.subscribe(date => {
      this.selectedDate = date;
    });
  
    this.monitors = this.entitiesService.getMonitors();
    this.activities = this.entitiesService.getActivitys();
  }
  
  openAddActivityModal(slot: string): void {
    this.resetModal();
    this.currentSlot = slot;
    this.isModalOpen = true;
  }

  openEditActivityModal(activity: Activity): void {
    this.isEditing = true;
    this.editingActivityId = activity.id;
    this.currentSlot = activity.fecha.split(', ')[1];
    this.newActivityMonitor1 = activity.monitor[0] || null;
    this.newActivityMonitor2 = activity.monitor[1] || null;
    this.newActivityType = activity.tipo;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.resetModal();
  }

  resetModal(): void {
    this.isEditing = false;
    this.editingActivityId = null;
    this.newActivityMonitor1 = null;
    this.newActivityMonitor2 = null;
    this.newActivityType = null!;
  }

  addActivity(): void {
    // Validar que al menos un monitor y el tipo de actividad estén seleccionados.
    if (!this.selectedDate || !this.newActivityType || (!this.newActivityMonitor1 && !this.newActivityMonitor2)) {
      alert('Debe seleccionar al menos un monitor y un tipo de actividad.');
      return;
    }

    // Obtener el último ID y calcular el nuevo ID
    const lastId = this.activities.length > 0 ? Math.max(...this.activities.map(activity => activity.id)) : 0;
    const newId = lastId + 1;
  
    // Construir la nueva actividad
    const fecha = `${this.selectedDate.toLocaleDateString('en-GB')}, ${this.currentSlot}`;
    const newActivity: Activity = {
      id: newId,
      fecha,
      monitor: [this.newActivityMonitor1, this.newActivityMonitor2].filter(Boolean) as Monitor[], // Solo monitores válidos
      tipo: this.newActivityType,
    };
  
    this.entitiesService.activitys.push(newActivity); // Guardar la nueva actividad
    this.activities = this.entitiesService.getActivitys(); // Actualizar la lista de actividades
    this.closeModal(); // Cerrar el modal
  }
  
  saveEditedActivity(): void {
    // Validar que al menos un monitor y el tipo de actividad estén seleccionados.
    if (this.editingActivityId === null || !this.selectedDate || !this.newActivityType || (!this.newActivityMonitor1 && !this.newActivityMonitor2)) {
      alert('Debe seleccionar al menos un monitor y un tipo de actividad.');
      return;
    }
  
    const editedActivity = this.activities.find(a => a.id === this.editingActivityId);
    if (editedActivity) {
      editedActivity.fecha = `${this.selectedDate.toLocaleDateString('en-GB')}, ${this.currentSlot}`;
      editedActivity.monitor = [this.newActivityMonitor1, this.newActivityMonitor2].filter(Boolean) as Monitor[]; // Solo monitores válidos
      editedActivity.tipo = this.newActivityType;
    }
  
    this.activities = this.entitiesService.getActivitys(); // Actualizar la lista de actividades
    this.closeModal(); // Cerrar el modal
  }
  

  getFilteredMonitors(monitor: Monitor | null): Monitor[] {
    return this.monitors.filter(m => m !== monitor);
  }

  getActivityForSlot(slot: string): Activity | null {
    if (!this.selectedDate) return null;
    const selectedDateString = this.selectedDate.toLocaleDateString('en-GB');
    const slotDateTime = `${selectedDateString}, ${slot}`;
    return this.activities.find(activity => activity.fecha === slotDateTime) || null;
  }

  nextDate(): void {
    this.dateService.nextDate();
  }

  previousDate(): void {
    this.dateService.previousDate();
  }

  removeActivitie(activityId: number | undefined): void {
    if (activityId === undefined) return;
    this.entitiesService.removeActivity(activityId);
    this.activities = this.entitiesService.getActivitys();
  }
}
