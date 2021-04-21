import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Worker } from './worker';
import { environment } from '../environments/environment';
import { Observable, pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  baseApi = environment.api;

  constructor(private http: HttpClient ) { }

  getAll(){
    return this.http.get(this.baseApi);
  }

  getId(id:any): Observable<any>{

    return this.http.get(`${this.baseApi}/${id}`);
  }

  // filter(id:any):Observable<any>{
  //   let paramsQuery = new HttpParams().set('print','pretty');
  //   return this.http.get(`${this.baseApi}/${id}`, {params:paramsQuery});
  // }


}


