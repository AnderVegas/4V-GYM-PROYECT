import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivitiesComponent } from '../activities/activities.component';
import { MonitorsComponent } from '../monitors/monitors.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements AfterViewInit {
  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  constructor(private router: Router, private resolver: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    // Cargar ActivitiesComponent por defecto después de que la vista está inicializada
    this.showActivities();
  }

  loadComponent(component: any) {
    this.popupContainer.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    this.popupContainer.createComponent(factory);
  }

  // Mostrar página de actividades
  showActivities() {
    this.loadComponent(ActivitiesComponent);
  }

  // Mostrar página de monitores
  showMonitors() {
    this.loadComponent(MonitorsComponent);
  }
}
