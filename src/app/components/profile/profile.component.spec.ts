import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  template: ''
})
class MockHistoryComponent {}

@Component({
  selector: 'app-repository-list',
  template: ''
})
class MockRepositoryListComponent {}

@Component({
  selector: 'app-references',
  template: ''
})
class MockReferencesComponent {}

@Component({
  selector: 'app-intro',
  template: ''
})
class MockIntroComponent {}

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfileComponent,
        MockHistoryComponent,
        MockRepositoryListComponent,
        MockReferencesComponent,
        MockIntroComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});