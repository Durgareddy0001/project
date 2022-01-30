import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  password: string = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  authenticate() {
    console.log('username>>>', this.userName);
    console.log('paword>>>', this.password);
    const body = {'userName':this.userName, 'password':this.password};
    const params = new HttpParams()
      .append('empId', this.userName)
      .append('password', this.password);
    const url = 'http://localhost:9080/api/emp/authenticate';
    this.apiService.makeapiPostCall(url, params);
  } 
}
