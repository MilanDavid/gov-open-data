import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data;

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get("http://opendata.mpn.gov.rs/get.php?dataset=akcioniplan&lang=sr&term=json")
  }
}
