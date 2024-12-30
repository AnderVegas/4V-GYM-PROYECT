import { Component } from '@angular/core';
import { DatepickerInlineCalendarExample } from '../activitie-calendar/activitie-calendar.component';

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [DatepickerInlineCalendarExample],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {

}
