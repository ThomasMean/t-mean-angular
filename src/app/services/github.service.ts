import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Repository } from '../interfaces/repository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {}

  getRepos(): Observable<Repository> {
    const githubUrl = 'https://api.github.com';
    const endpoint = githubUrl + '/users/ThomasMean/repos';
    return this.http.get<Repository>(endpoint).pipe(take(1));
  }
}
