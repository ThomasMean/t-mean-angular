import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHistoryComponent } from './education-history.component';
import { Input, Component } from '@angular/core';
import { School } from 'src/app/models/school.model';
import { EMPTY } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-education-history-item',
  template: ''
})
class MockEducationHistoryItemComponent {
  @Input() school: School;
}
describe('EducationHistoryComponent', () => {
  let component: EducationHistoryComponent;
  let fixture: ComponentFixture<EducationHistoryComponent>;

  const data = EMPTY;

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
    component.schools = EMPTY;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
