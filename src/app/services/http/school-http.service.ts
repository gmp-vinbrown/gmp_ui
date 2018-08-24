import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { School } from 'gmp_ui_domain_models';

declare var require: any; 

let Config = require('../../../assets/config.json');

const SCHOOLS_ENDPOINT = Config.baseApiUrl + '/schools/';

@Injectable({
	providedIn: 'root'
})
export class SchoolHttpService {

	constructor(private _http: HttpClient) {

	}

	public getSchoolById(id: number): Observable<School> {
		return this._http.get<School>(SCHOOLS_ENDPOINT + id)
			.map(res => res);
			//.catch(this.handleError)
	}

	private handleError(error: Response | any) {
		debugger;
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
