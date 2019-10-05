import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job.model';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {

  constructor() { }
  jobs: Job[] = [
    {
      startDate: 'Jun 2018',
      endDate: 'Present',
      role: 'Consultant',
      company: 'Santander UK Technology',
      website: 'https://www.santandertechnology.co.uk/'
    },
    {
      startDate: 'Sep 2017',
      endDate: 'Jun 2018',
      role: 'Graduate Trainee',
      company: 'Santander UK Technology',
      website: 'https://www.santandertechnology.co.uk/'
    },
    {
      startDate: 'Jun 2015',
      endDate: 'Jun 2016',
      role: 'Undergraduate Trainee',
      company: 'Software Solved',
      website: 'https://www.softwaresolved.com/'
    }
  ];

  ngOnInit() {
  }


}
