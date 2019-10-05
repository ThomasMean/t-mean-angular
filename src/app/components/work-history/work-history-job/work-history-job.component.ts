import { Component, OnInit, Input } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-work-history-job',
  templateUrl: './work-history-job.component.html',
  styleUrls: ['./work-history-job.component.scss']
})
export class WorkHistoryJobComponent implements OnInit {

  @Input() job: Job;

  constructor() { }

  ngOnInit() {
  }

}
