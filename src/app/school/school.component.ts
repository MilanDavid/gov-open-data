import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  displayedColumns: string[] = ['select'];
  dataSource;
  selection = new SelectionModel<any>(true, []);
  govData;

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels = [];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [];
  chartData = [];
  @ViewChild(BaseChartDirective) _chart;


  constructor(private data: DataService) {
    this.dataSource = new MatTableDataSource<any>([]);
  }

  async ngOnInit() {
    await this.data.brojOdeljenja().subscribe(d => {
      this.dataSource.data = d;
      Object.getOwnPropertyNames(d[0]).forEach(el => this.displayedColumns.push(el));
      this.barChartLabels = this.displayedColumns.slice(3);
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {
        this.selection.select(row)
        console.log(row);
      });
  }

  toggle(el) {
    // let item = {data: [Number(el['broj_odeljenja']), Number(el['broj_celina']), Number(el['broj_ucenika']), Number(el['broj_devojcica']), Number(el['broj_decaka']), Number(el['broj_iop1']), Number(el['broj_iop2']), Number(el['broj_iop3'])], label: el['delatnost']}
    let toRemoveIndex;
    let exist = false;

    // check if item already exist
    if(this.barChartData.length !== 0){
      this.barChartData.forEach(e => {
        if (e['index'] === el['index']) {
          exist = true;
          toRemoveIndex = this.barChartData.indexOf(e) + 1;
          // console.log("When index match: " + (this.barChartData.indexOf(e) + 1))
        }
      })
    } else {
      toRemoveIndex = 0;
    }

    // check if exist item, if not add it to array else item already exists and remove it
    // console.log("Does exist? " + exist)
    if (!exist) {
      this.barChartData.push(el);
      if(this.barChartData.length !== 1) {
        this._chart.refresh()
      };
    } else {
      this.barChartData.splice(toRemoveIndex - 1, 1);
      exist = false;
      if(this.barChartData.length !== 0) {
        this._chart.refresh()
      };
    }
    // console.log("Chart leng: " + this.barChartData.length)
    // console.log("To remove index: " + toRemoveIndex)
    // console.log("Chart data: ", this.barChartData)

  }

}
