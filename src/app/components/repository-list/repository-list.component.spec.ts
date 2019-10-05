import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryListComponent } from './repository-list.component';
import { Component, Input } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Repository } from 'src/app/models/repository.model';


@Component({
  selector: 'app-repository-view',
  template: ''
})
class MockRepositoryViewComponent {
  @Input() repository: Repository;
}

describe('RepositoryListComponent', () => {
  let component: RepositoryListComponent;
  let fixture: ComponentFixture<RepositoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryListComponent, MockRepositoryViewComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
