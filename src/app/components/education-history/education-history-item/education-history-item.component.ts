import { Component, OnInit, Input } from '@angular/core';
import { School } from 'src/app/interfaces/school';

@Component({
  selector: 'app-education-history-item',
  templateUrl: './education-history-item.component.html',
  styleUrls: ['./education-history-item.component.scss']
})
export class EducationHistoryItemComponent implements OnInit {
  @Input() school: School;

  constructor() {}

  ngOnInit() {}

  getResults() {
    return `${this.school.level} in ${this.school.subjects.join(', ')}`;
  }
}
