import { Injectable } from '@angular/core';
import { Http } from '@angular/https';
import 'rxjs/add/operator/map';

@Injectable()
  providedIn: 'root'
export class DataService {

  result:any;

  constructor(private _http: Http) { }
  
  getprices(){
    return this._http._https.get('http://sovcore.org/price.php')
    .map(result => this.result = result.json());
  }
}
