import { Component, OnInit } from '@angular/core';
import { JoinService } from '../services/join.service';
import { User } from '../models/User';

import {FormsModule} from '@angular/forms';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  user: User;
  constructor() { }
// private joinService : JoinService
  ngOnInit() {
  }

  onSubmit(){

  }
}
