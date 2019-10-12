import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: ''
})
class MockHeaderComponent {}

@Component({
  selector: 'app-work-history',
  template: ''
})
class MockWorkHistoryComponent {}

@Component({
  selector: 'app-education-history',
  template: ''
})
class MockEducationHistoryComponent {}

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

@Component({
  selector: 'app-contact',
  template: ''
})
class MockContactComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MatToolbarModule],
      declarations: [
        AppComponent,
        MockHeaderComponent,
        MockWorkHistoryComponent,
        MockEducationHistoryComponent,
        MockRepositoryListComponent,
        MockReferencesComponent,
        MockIntroComponent,
        MockContactComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
