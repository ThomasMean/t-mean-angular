import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHistoryComponent } from './work-history.component';
import { EMPTY } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, Input } from '@angular/core';
import { Job } from 'src/app/models/job.model';


@Component({
  selector: 'app-work-history-job',
  template: ''
})
class MockWorkHistoryJobComponent {
  @Input() job: Job;
}

describe('WorkHistoryComponent', () => {
  let component: WorkHistoryComponent;
  let fixture: ComponentFixture<WorkHistoryComponent>;

  const data = EMPTY;

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  };

  const angularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkHistoryComponent, MockWorkHistoryJobComponent ],
      providers: [{provide: AngularFirestore, useValue: angularFirestoreStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.jobs = EMPTY;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
