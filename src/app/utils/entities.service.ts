import { Injectable } from '@angular/core';

export interface Activity {
  id?: number;
  fecha: string;
  monitor: Monitor[];
  tipo: ActivityType;
}
export interface Monitor{
  id?: number;
  nombre: string;
  email: string;
  telefono: string;
}
export enum ActivityType {
  BodyPump = "BodyPump",
  Pilates = "Pilates",
  Spinning = "Spinning"
}

@Injectable({
  providedIn: 'root'
})
export class EntitiesService {

  activitys: Activity[];
  monitors: Monitor[];

  constructor() {
    this.monitors = [
      {
        id: 0,
        nombre: "Juan",
        email: "juan@gmail.com",
        telefono: "948128888"
      },
      {
        id: 1,
        nombre: "Maria",
        email: "maria@gmail.com",
        telefono: "676950699"
      },
      {
        id: 2,
        nombre: "Pedro",
        email: "pedro@gmail.com",
        telefono: "674735847"
      },
      {
        id: 3,
        nombre: "Mikel",
        email: "mikel@gmail.com",
        telefono: "696039394"
      }
    ]
    this.activitys = [
      {
        id: 0,
        fecha: "21/12/2023, 10:00:00",
        monitor: [this.monitors[0]],
        tipo: ActivityType.BodyPump
      },
      {
        id: 1,
        fecha: "22/12/2023, 13:30:00",
        monitor: [this.monitors[1]],
        tipo: ActivityType.Pilates
      },
      {
        id: 2,
        fecha: "23/12/2023, 17:30:00",
        monitor: [this.monitors[1], this.monitors[2]],
        tipo: ActivityType.Spinning
      }
    ];;
   }

  getActivitys(){
   return this.activitys;
  }
  getMonitors(){
    return this.monitors;
  }
}
