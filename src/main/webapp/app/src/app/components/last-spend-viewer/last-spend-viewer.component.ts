import { Spend } from './../spend-manager/spend/model/spend';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-last-spend-viewer',
  templateUrl: './last-spend-viewer.component.html',
  styleUrls: ['./last-spend-viewer.component.scss']
})
export class LastSpendViewerComponent implements OnInit {
  displayedColumns = [
    'position',
    'description',
    'value',
    'date',
    'category',
    'action'
  ];

  dataSource = new MatTableDataSource<Spend>(ELEMENT_DATA);

  constructor() {}

  ngOnInit() {}
}

const ELEMENT_DATA: Spend[] = [
  {
    id: 1,
    description: 'Spend 1',
    value: 100,
    date: new Date(),
    category: 'Lol'
  },
  {
    id: 2,
    description: 'Spend 2',
    value: 101,
    date: new Date(),
    category: 'Lol'
  },
  {
    id: 3,
    description: 'Spend 3',
    value: 102,
    date: new Date(),
    category: 'Lol'
  },
  {
    id: 4,
    description: 'Spend 4',
    value: 103,
    date: new Date(),
    category: 'Lol'
  },
  {
    id: 5,
    description: 'Spend 5',
    value: 100,
    date: new Date(),
    category: 'Lol'
  },
  {
    id: 6,
    description: 'Spend 6',
    value: 100,
    date: new Date(),
    category: 'Lol'
  },
  {
    id: 7,
    description: 'Spend 7',
    value: 100,
    date: new Date(),
    category: 'Lol'
  },
  {
    id: 8,
    description: 'Spend 8',
    value: 100,
    date: new Date(),
    category: 'Lol'
  }
];
