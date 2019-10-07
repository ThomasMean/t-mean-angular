import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesComponent } from './references.component';
import { Component, Input } from '@angular/core';
import { Reference } from 'src/app/models/reference.model';
import { EMPTY } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-reference-item',
  template: ''
})
class MockReferenceItemComponent {
  @Input() ref: Reference;
}

describe('ReferencesComponent', () => {
  let component: ReferencesComponent;
  let fixture: ComponentFixture<ReferencesComponent>;

  const data = EMPTY;

  const collectionStub = {
    valueChanges: jasmine.createSpy('valueChanges').and.returnValue(data)
  };

  const angularFirestoreStub = {
    collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferencesComponent, MockReferenceItemComponent],
      providers: [{ provide: AngularFirestore, useValue: angularFirestoreStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencesComponent);
    component = fixture.componentInstance;
    component.references = data;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
