import { Injectable } from '@angular/core';

export interface Activity {
  id: number;
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
        nombre: "Joaquin Rodriguez",
        email: "jrodri@hotmail.es",
        telefono: "643231413"
      },
      {
        id: 1,
        nombre: "Miguel Goyena",
        email: "miguel_goyena@cuatrovientos.org",
        telefono: "643231413"
      },
      {
        id: 2,
        nombre: "Lucia Rodriguez",
        email: "luci@gmail.com",
        telefono: "643231413"
      },
      {
        id: 3,
        nombre: "Lurdes Dominguez",
        email: "ldominguez@gmail.com",
        telefono: "643231413"
      },
      {
        id: 4,
        nombre: "Juan Cuesta",
        email: "juanC@gmail.com",
        telefono: "643231413"
      },
      // {
      //   id: 0,
      //   nombre: "Joaquin Rodriguez",
      //   email: "jrodri@hotmail.es",
      //   telefono: "643231413"
      // },
      // {
      //   id: 1,
      //   nombre: "Miguel Goyena",
      //   email: "miguel_goyena@cuatrovientos.org",
      //   telefono: "643231413"
      // },
      // {
      //   id: 2,
      //   nombre: "Lucia Rodriguez",
      //   email: "luci@gmail.com",
      //   telefono: "643231413"
      // },
      // {
      //   id: 3,
      //   nombre: "Lurdes Dominguez",
      //   email: "ldominguez@gmail.com",
      //   telefono: "643231413"
      // },
      // {
      //   id: 4,
      //   nombre: "Juan Cuesta",
      //   email: "juanC@gmail.com",
      //   telefono: "643231413"
      // }
    ]
    this.activitys = [
      {
        id: 0,
        fecha: "30/12/2024, 10:00 11:30",
        monitor: [this.monitors[0]],
        tipo: ActivityType.BodyPump
      },
      {
        id: 1,
        fecha: "29/12/2024, 13:30 15:00",
        monitor: [this.monitors[1]],
        tipo: ActivityType.Pilates
      },
      {
        id: 2,
        fecha: "30/12/2024, 17:30 19:00",
        monitor: [this.monitors[1], this.monitors[2]],
        tipo: ActivityType.Spinning
      },
      {
        id: 3,
        fecha: "02/01/2025, 17:30 19:00",
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

  removeActivity(activityId : number){
    this.activitys = this.activitys.filter(activity => activity.id !== activityId);
  }
}
