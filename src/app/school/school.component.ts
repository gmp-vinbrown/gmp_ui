import { Component, OnInit } from '@angular/core';
import { School } from 'gmp_ui_domain_models';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {

  school: School = {
    schoolId: 0,
    code: '',
    created: null,
    createdId: 0,
    name: '',
    roles: null,
    levels: null,
    programs: null,
    schoolLocations: null
  };

  constructor() { }

  ngOnInit() {
  }

}
