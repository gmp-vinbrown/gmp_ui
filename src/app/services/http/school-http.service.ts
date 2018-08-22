import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { School } from 'gmp_ui_domain_models';

import * as Config from '../../../assets/config.json';

const SCHOOLS_ENDPOINT = Config.baseApiUrl + '\schools\\';

@Injectable({
  providedIn: 'root'
})
export class SchoolHttpService {

  constructor(private _http: Http) {

  }

  public getSchoolById(id: number): Observable<School> {
    return this._http.get(SCHOOLS_ENDPOINT + id)
      .map(res => <School>res.json())
      .catch(this.handleError)
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} : ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
