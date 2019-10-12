import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHistoryComponent } from './education-history.component';
import { Input, Component } from '@angular/core';
import { School } from 'src/app/interfaces/school';
import { EMPTY, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-education-history-item',
  template: ''
})
class MockEducationHistoryItemComponent {
  @Input() school: School;
}

const school1: School = {
  startDate: 'Oct 2019',
  endDate: 'Present',
  name: 'University of York',
  level: 'BSc',
  subjects: ['Computer Science and Mathematics (2:1)'],
  startTimestamp: { seconds: 12345 }
};

const school2: School = {
  startDate: 'Oct 2020',
  endDate: 'Present',
  name: 'University of York',
  level: 'BSc',
  subjects: ['Computer Science and Mathematics (2:1)'],
  startTimestamp: { seconds: 1234 }
};

describe('EducationHistoryComponent', () => {
  let component: EducationHistoryComponent;
  let fixture: ComponentFixture<EducationHistoryComponent>;

  const data = of([school1, school2]);

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  };

  const angularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EducationHistoryComponent, MockEducationHistoryItemComponent],
      providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load schools', () => {
    component.ngOnInit();
    component.schools.subscribe(schools => {
      expect(schools[0].startDate).toEqual('Oct 2019');
    });
  });
});
