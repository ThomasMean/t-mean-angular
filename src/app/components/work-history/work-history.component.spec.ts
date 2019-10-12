import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryComponent } from './work-history.component';
import { EMPTY, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, Input } from '@angular/core';
import { Job } from 'src/app/interfaces/job';

@Component({
  selector: 'app-work-history-job',
  template: ''
})
class MockWorkHistoryJobComponent {
  @Input() job: Job;
}

const job1: Job = {
  startDate: 'Oct 2019',
  endDate: 'Present',
  role: 'Consultant',
  company: 'Santander UK Technology',
  website: 'https://www.santandertechnology.co.uk/',
  startTimestamp: { seconds: 1234 },
  languages: ['English', 'Spanish'],
  description: 'Test test'
};

const job2: Job = {
  startDate: 'Oct 2020',
  endDate: 'Present',
  role: 'Consultant',
  company: 'Santander UK Technology',
  website: 'https://www.santandertechnology.co.uk/',
  startTimestamp: { seconds: 1234 },
  languages: ['English', 'Spanish'],
  description: 'Test test'
};

describe('WorkHistoryComponent', () => {
  let component: WorkHistoryComponent;
  let fixture: ComponentFixture<WorkHistoryComponent>;

  const data = of([job1, job2]);

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  };

  const angularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WorkHistoryComponent, MockWorkHistoryJobComponent],
      providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load jobs', () => {
    component.ngOnInit();
    component.jobs.subscribe(jobs => {
      expect(jobs[0].startDate).toEqual('Oct 2019');
    });
  });
});
