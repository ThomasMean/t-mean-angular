import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceItemComponent } from './reference-item.component';
import { Reference } from 'src/app/interfaces/reference';

describe('ReferenceItemComponent', () => {
  const ref: Reference = {
    company: 'Santander Uk Technology',
    source: 'Test Source',
    content: 'Test Content',
    priority: 1
  };

  let component: ReferenceItemComponent;
  let fixture: ComponentFixture<ReferenceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenceItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceItemComponent);
    component = fixture.componentInstance;
    component.ref = ref;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
