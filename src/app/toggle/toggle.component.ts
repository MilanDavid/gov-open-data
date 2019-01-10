import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  tableData;
  graphData = [];
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.brojOdeljenja().subscribe((d: Array<any>) => {
      console.log(d);
      this.tableData = d;
      d.forEach(el => {
        console.log(el)
      });
    })

  }

  toggle(el) {
    if (!this.graphData.includes(el)) {
      this.graphData.push(el);
    } else {
      console.log(this.graphData.indexOf(el));
      this.graphData.splice(this.graphData.indexOf(el), 1);
    }
  }

}
