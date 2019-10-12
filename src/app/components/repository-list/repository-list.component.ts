import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github.service';
import { Observable } from 'rxjs';
import { Repository } from 'src/app/interfaces/repository';

@Component({
  selector: 'app-repository-list',
  templateUrl: './repository-list.component.html',
  styleUrls: ['./repository-list.component.scss']
})
export class RepositoryListComponent implements OnInit {
  repositories: Observable<Repository>;

  constructor(private githubService: GithubService) {
    this.repositories = this.githubService.getRepos();
  }

  ngOnInit() {}
}
