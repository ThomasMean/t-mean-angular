import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrls: ['./references.component.scss']
})
export class ReferencesComponent implements OnInit {
  references: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.references = db.collection('references', ref => ref.orderBy('priority', 'asc')).valueChanges();
  }

  ngOnInit() {}
}
