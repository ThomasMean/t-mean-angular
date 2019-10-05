import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { take } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  getProjects() {
    const githubUrl = 'https://api.github.com';
    const endpoint = githubUrl + '/users/ThomasMean/projects';
    const httpOptions = {
      headers: new HttpHeaders({
        'X-GitHub-Media-Type':  'application/vnd.github.inertia-preview+json',
      })
    };
    return this.http.get(endpoint, httpOptions).pipe(take(1));
  }
}
