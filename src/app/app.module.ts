import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { SchoolComponent } from './school/school.component';
import { RouterModule } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ChartsModule} from 'ng2-charts';
import { ChartComponent } from './chart/chart.component'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { SampleComponent } from './sample/sample.component';
import { ToggleComponent } from './toggle/toggle.component';
import { NgChartjsModule } from 'ng-chartjs';


@NgModule({
  declarations: [
    AppComponent,
    SchoolComponent,
    ChartComponent,
    SampleComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatMenuModule,
    ChartsModule,
    NgChartjsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    RouterModule.forRoot([
      { path: '', component: SchoolComponent },
      { path: 'school', component: SchoolComponent},
      { path: 'chart', component: ChartComponent},
      { path: 'sample', component: SampleComponent},
      { path: 'toggle', component: ToggleComponent},
    ]),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
