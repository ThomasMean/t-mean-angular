import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education-history',
  template: ''
})
class MockEducationHistoryComponent {}

@Component({
  selector: 'app-work-history',
  template: ''
})
class MockWorkHistoryComponent {}

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryComponent, MockEducationHistoryComponent, MockWorkHistoryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
