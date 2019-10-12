import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryViewComponent } from './repository-view.component';
import { Repository, Owner } from 'src/app/interfaces/repository';

describe('RepositoryViewComponent', () => {
  let component: RepositoryViewComponent;
  let fixture: ComponentFixture<RepositoryViewComponent>;

  const owner: Owner = {
    login: 'ThomasMean',
    id: 5399467,
    node_id: 'MDQ6VXNlcjUzOTk0Njc=',
    avatar_url: 'https://avatars0.githubusercontent.com/u/5399467?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/ThomasMean',
    html_url: 'https://github.com/ThomasMean',
    followers_url: 'https://api.github.com/users/ThomasMean/followers',
    following_url: 'https://api.github.com/users/ThomasMean/following{/other_user}',
    gists_url: 'https://api.github.com/users/ThomasMean/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/ThomasMean/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/ThomasMean/subscriptions',
    organizations_url: 'https://api.github.com/users/ThomasMean/orgs',
    repos_url: 'https://api.github.com/users/ThomasMean/repos',
    events_url: 'https://api.github.com/users/ThomasMean/events{/privacy}',
    received_events_url: 'https://api.github.com/users/ThomasMean/received_events',
    type: 'User',
    site_admin: false
  };

  const repo: Repository = {
    id: 74714239,
    node_id: 'MDEwOlJlcG9zaXRvcnk3NDcxNDIzOQ==',
    name: 'CrowdSourcedAsteroids',
    full_name: 'ThomasMean/CrowdSourcedAsteroids',
    private: false,
    owner,
    html_url: 'https://github.com/ThomasMean/CrowdSourcedAsteroids',
    description: 'Final Year Project',
    fork: false,
    url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids',
    forks_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/forks',
    keys_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/keys{/key_id}',
    collaborators_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/collaborators{/collaborator}',
    teams_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/teams',
    hooks_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/hooks',
    issue_events_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/issues/events{/number}',
    events_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/events',
    assignees_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/assignees{/user}',
    branches_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/branches{/branch}',
    tags_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/tags',
    blobs_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/git/blobs{/sha}',
    git_tags_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/git/tags{/sha}',
    git_refs_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/git/refs{/sha}',
    trees_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/git/trees{/sha}',
    statuses_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/statuses/{sha}',
    languages_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/languages',
    stargazers_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/stargazers',
    contributors_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/contributors',
    subscribers_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/subscribers',
    subscription_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/subscription',
    commits_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/commits{/sha}',
    git_commits_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/git/commits{/sha}',
    comments_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/comments{/number}',
    issue_comment_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/issues/comments{/number}',
    contents_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/contents/{+path}',
    compare_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/compare/{base}...{head}',
    merges_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/merges',
    archive_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/{archive_format}{/ref}',
    downloads_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/downloads',
    issues_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/issues{/number}',
    pulls_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/pulls{/number}',
    milestones_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/milestones{/number}',
    notifications_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/notifications{?since,all,participating}',
    labels_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/labels{/name}',
    releases_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/releases{/id}',
    deployments_url: 'https://api.github.com/repos/ThomasMean/CrowdSourcedAsteroids/deployments',
    created_at: new Date('2016-11-25T00:58:18Z'),
    updated_at: new Date('2018-12-11T22:12:55Z'),
    pushed_at: new Date('2018-12-11T22:12:49Z'),
    git_url: 'git://github.com/ThomasMean/CrowdSourcedAsteroids.git',
    ssh_url: 'git@github.com:ThomasMean/CrowdSourcedAsteroids.git',
    clone_url: 'https://github.com/ThomasMean/CrowdSourcedAsteroids.git',
    svn_url: 'https://github.com/ThomasMean/CrowdSourcedAsteroids',
    homepage: null,
    size: 70361,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'C#',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: 'master'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RepositoryViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryViewComponent);
    component = fixture.componentInstance;
    component.repository = repo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
