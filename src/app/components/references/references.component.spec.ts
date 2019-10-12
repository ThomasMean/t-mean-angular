import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencesComponent } from './references.component';
import { Component, Input } from '@angular/core';
import { Reference } from 'src/app/interfaces/reference';
import { EMPTY, of } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-reference-item',
  template: ''
})
class MockReferenceItemComponent {
  @Input() ref: Reference;
}

const ref1: Reference = {
  company: 'Santander Uk Technology',
  source: 'Test Source',
  content: 'Test Content',
  priority: 1
};

const ref2: Reference = {
  company: 'Santander Uk Technology',
  source: 'Test Source',
  content: 'Test Content',
  priority: 2
};

describe('ReferencesComponent', () => {
  let component: ReferencesComponent;
  let fixture: ComponentFixture<ReferencesComponent>;

  const data = of([ref1, ref2]);

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load references', () => {
    component.ngOnInit();
    component.references.subscribe(references => {
      expect(references[0].priority).toEqual(1);
    });
  });
});
