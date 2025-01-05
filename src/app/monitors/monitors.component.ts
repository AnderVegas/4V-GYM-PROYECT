import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Para usar pipes como 'date'
import { EntitiesService, Monitor } from '../utils/entities.service';

@Component({
  selector: 'app-monitors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monitors.component.html',
  styleUrls: ['./monitors.component.scss']
})
export class MonitorsComponent implements OnInit {
  monitors: Monitor[] = [];
  visibleMonitors: Monitor[] = [];  // Lista de monitores que se mostrarán en el carrusel
  currentIndex: number = 0;  // Índice para el primer monitor visible

  constructor(private entitiesService: EntitiesService) {}

  ngOnInit(): void {
    this.monitors = this.entitiesService.getMonitors();
    this.updateVisibleMonitors();  // Inicializar los monitores visibles
  }

  // Actualiza la lista de monitores visibles (3 a la vez)
  updateVisibleMonitors(): void {
    const endIndex = this.currentIndex + 3;
    this.visibleMonitors = this.monitors.slice(this.currentIndex, endIndex);
  }

  // Función para ir al monitor anterior
  previousMonitor(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      // Si estamos en el primer grupo, volvemos al final
      this.currentIndex = this.monitors.length - 3;
    }
    this.updateVisibleMonitors();
  }

  // Función para ir al siguiente monitor
  nextMonitor(): void {
    if (this.currentIndex < this.monitors.length - 3) {
      this.currentIndex++;
    } else {
      // Si estamos en el último grupo, volvemos al principio
      this.currentIndex = 0;
    }
    this.updateVisibleMonitors();
  }
}
