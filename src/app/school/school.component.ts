import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  title = 'gov-open-data';
  displayedColumns: string[] = [];
  dataSource;

  constructor(private data: DataService) {
    this.dataSource = new MatTableDataSource<any>([]);
  }
  
  ngOnInit() {
    this.data.getData().subscribe(d => {
      this.dataSource.data = d
      this.displayedColumns = Object.getOwnPropertyNames(d[0]);
      console.log(d);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
