import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryJobComponent } from './work-history-job.component';
import { Job } from 'src/app/interfaces/job';

describe('WorkHistoryJobComponent', () => {
  const job: Job = {
    startDate: 'Oct 2019',
    endDate: 'Present',
    role: 'Consultant',
    company: 'Santander UK Technology',
    website: 'https://www.santandertechnology.co.uk/',
    startTimestamp: { seconds: 1234 },
    languages: ['English', 'Spanish'],
    description: 'Test test'
  };

  let component: WorkHistoryJobComponent;
  let fixture: ComponentFixture<WorkHistoryJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkHistoryJobComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHistoryJobComponent);
    component = fixture.componentInstance;
    component.job = job;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
