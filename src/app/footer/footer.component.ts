import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
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
export class FooterComponent {

  @ViewChild('popupContainer', { read: ViewContainerRef }) popupContainer!: ViewContainerRef;

  constructor(private router: Router, private resolver: ComponentFactoryResolver) {}

  loadComponent(component: any) {
    this.popupContainer.clear();
    const factory = this.resolver.resolveComponentFactory(component);
    const componentRef = this.popupContainer.createComponent(factory);
  }

  showActivities() {
    this.loadComponent(ActivitiesComponent);
  }

  showMonitors() {
    this.loadComponent(MonitorsComponent);
  }

}
