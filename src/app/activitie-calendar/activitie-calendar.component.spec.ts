import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitieCalendarComponent } from './activitie-calendar.component';

describe('ActivitieCalendarComponent', () => {
  let component: ActivitieCalendarComponent;
  let fixture: ComponentFixture<ActivitieCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActivitieCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActivitieCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
