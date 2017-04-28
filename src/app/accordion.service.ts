import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Faq } from './model';

@Injectable()
export class AccService {

  constructor(private http: Http) {}

  getItems(): Observable<Faq[]> {
  	return this.http.get('src/app/data.json')
  		.map(res => res.json().data)
  		.catch(err => err.json().error);
  }
}
