import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-education-history',
  templateUrl: './education-history.component.html',
  styleUrls: ['./education-history.component.scss']
})
export class EducationHistoryComponent implements OnInit {
  schools: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.schools = db
      .collection('education-history', ref =>
        ref.orderBy('startTimestamp', 'desc')
      )
      .valueChanges();
  }

  ngOnInit() {}
}
