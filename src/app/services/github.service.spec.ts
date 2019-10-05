import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { GithubService } from './github.service';

describe('GithubService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: GithubService;

  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  beforeEach(() => {
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(GithubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('can load github user repo data', () => {
    const respData = { name: 'TestName' };

    service.getRepos().subscribe(data => {
      expect(data.name).toEqual('TestName');
    });

    const req = httpTestingController.expectOne(
      'https://api.github.com/users/ThomasMean/repos'
    );

    expect(req.request.method).toEqual('GET');
    req.flush(respData);
    httpTestingController.verify();
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
