import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationHistoryItemComponent } from './education-history-item.component';
import { School } from 'src/app/models/school.model';

describe('EducationHistoryItemComponent', () => {
  let component: EducationHistoryItemComponent;
  let fixture: ComponentFixture<EducationHistoryItemComponent>;

  const school: School = {
    startDate: 'Oct 2019',
    endDate: 'Present',
    name: 'University of York',
    level: 'BSc',
    subjects: ['Computer Science and Mathematics (2:1)'],
    startTimestamp: { seconds: 1234 }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EducationHistoryItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationHistoryItemComponent);
    component = fixture.componentInstance;
    component.school = school;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render out results correctly', () => {
    expect(component.getResults()).toEqual('BSc in Computer Science and Mathematics (2:1)');
  });
});
