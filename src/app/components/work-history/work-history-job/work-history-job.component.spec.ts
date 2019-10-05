import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryJobComponent } from './work-history-job.component';

describe('WorkHistoryJobComponent', () => {
  let component: WorkHistoryJobComponent;
  let fixture: ComponentFixture<WorkHistoryJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkHistoryJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHistoryJobComponent);
    component = fixture.componentInstance;
    component.job = {
      startDate: 'Jun 2018',
      endDate: 'Present',
      role: 'Consultant',
      company: 'Santander UK Technology',
      website: 'https://www.santandertechnology.co.uk/'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
