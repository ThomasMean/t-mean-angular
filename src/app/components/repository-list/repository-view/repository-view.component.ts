import { Component, OnInit, Input } from '@angular/core';
import { Repository } from 'src/app/interfaces/repository';

@Component({
  selector: 'app-repository-view',
  templateUrl: './repository-view.component.html',
  styleUrls: ['./repository-view.component.scss']
})
export class RepositoryViewComponent implements OnInit {
  @Input() repository: Repository;

  constructor() {}

  ngOnInit() {}
}
