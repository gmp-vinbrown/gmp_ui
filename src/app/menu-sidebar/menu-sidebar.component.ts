import { Component, OnInit } from '@angular/core';
import { SchoolHttpService } from '../services/http/school-http.service';
import { School } from 'gmp_ui_domain_models';

@Component({
	selector: 'app-menu-sidebar',
	templateUrl: './menu-sidebar.component.html',
	styleUrls: ['./menu-sidebar.component.scss']
})
export class MenuSidebarComponent implements OnInit {

	sidebarVisible = true;
	school: School;
	
	constructor(private _schoolHttpService: SchoolHttpService) { }

	ngOnInit() {
		this._schoolHttpService.getSchoolById(3).toPromise().then((school)=>{
			this.school = school;
		});
	}

}
