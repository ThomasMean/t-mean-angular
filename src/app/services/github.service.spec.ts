// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { GithubService } from './github.service';

describe('GithubService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: GithubService;

  beforeEach(() => TestBed.configureTestingModule({imports: [ HttpClientTestingModule ]}));


  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can load github user project data', () => {

    const dummy = {project: 'Test Project'};

    service.getProjects().subscribe(data => {
      expect(data).toEqual(dummy);
    });

    const req = httpTestingController.expectOne('https://api.github.com/users/ThomasMean/projects');

    expect(req.request.method).toEqual('GET');
    req.flush(dummy);
    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
