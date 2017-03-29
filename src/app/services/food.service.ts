import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FoodService {
  foodEndpoint : string = 'http://localhost:8080/api/food';
  constructor(private http: Http) { }

  public listFood() : Observable<any>{
    return this.http.get(this.foodEndpoint).map(res => res.json()).catch(this.handleError);
  }
  public getFood(id : string) : Observable<any>{
    return this.http.get(this.foodEndpoint+'/'+id).map(res => res.json()).catch(this.handleError);
  }
  public checkout(items: [any]): Observable<any>{
    let data = {
      items: items
    };
    return this.http.put(this.foodEndpoint+'/checkout', data).map(res => res.json()).catch(this.handleError);
  }
  public handleError(err) : Observable<any>{
    return Observable.throw(err.json().error || 'Server Error');
  }
}