import { Component, OnInit, Input } from '@angular/core';
import { Reference } from 'src/app/interfaces/reference';

@Component({
  selector: 'app-reference-item',
  templateUrl: './reference-item.component.html',
  styleUrls: ['./reference-item.component.scss']
})
export class ReferenceItemComponent implements OnInit {
  @Input() ref: Reference;

  constructor() {}

  ngOnInit() {}
}
