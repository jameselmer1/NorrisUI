import { Component, OnInit, Input } from '@angular/core';

import { Joke } from '../../Joke';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['value', 'created_at'];
  @Input() dataSource: Joke[] = [];
  
  constructor() { }

  ngOnInit(): void { }
}
