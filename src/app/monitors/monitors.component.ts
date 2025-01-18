import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  visibleMonitors: Monitor[] = [];
  currentIndex: number = 0;
  currentTranslate: number = 0; // Controla el desplazamiento
  cardWidth: number = 330; // Ancho del card + margen (330px ancho)
  transitionDuration: string = '0.5s'; // Duración de la transición

  constructor(private entitiesService: EntitiesService) {}

  ngOnInit(): void {
    this.monitors = this.entitiesService.getMonitors();
    this.updateVisibleMonitors();
  }

  updateVisibleMonitors(): void {
    this.visibleMonitors = this.monitors.slice(this.currentIndex, this.currentIndex + 3);
  }

  previousMonitor(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.monitors.length - 3;
    }
    this.updateTranslate();
  }

  nextMonitor(): void {
    if (this.currentIndex < this.monitors.length - 3) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateTranslate();
  }

  updateTranslate(): void {
    // Usamos currentTranslate para controlar el desplazamiento horizontal
    this.currentTranslate = this.currentIndex * this.cardWidth;
    // Actualizamos la transición para que sea suave y duradera
    this.transitionDuration = '0.5s';
  }
}
