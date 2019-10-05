import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  jobs: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.jobs = db
      .collection('work-history', ref => ref.orderBy('startTimestamp', 'desc'))
      .valueChanges();
  }

  ngOnInit() {}
}
