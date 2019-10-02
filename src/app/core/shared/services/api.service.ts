import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Visitor } from '../../dasboard/models/visitor';
import { Company } from '../../dasboard/models/company';

// Live backend http://visitorapp-env.dk3pev7qew.us-east-1.elasticbeanstalk.com/api
// Local Backend http://localhost:5000/api
const URL = 'http://visitorapp-env.dk3pev7qew.us-east-1.elasticbeanstalk.com/api';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private Http: HttpClient) { }

  // Api for Visitors
  getVisitor(): Observable<Visitor[]> {
    return this.Http.get<Visitor[]>(`${URL}/visitors`);
  }

  deleteVisitor(_id: string): Observable<Visitor> {
    return this.Http.delete<Visitor>(`${URL}/visitors/${_id}`);
  }

  createVisitor(value: Visitor): Observable<Visitor[]> {
    return this.Http.post<Visitor[]>(`${URL}/visitors`, value);
  }

  findVisitorById(id: string): Observable<Visitor> {
    return this.Http.get<Visitor>(`${URL}/visitors/${id}`);
  }

  updateVisitor(id: string, body: Visitor): Observable<Visitor> {
    return this.Http.put<Visitor>(`${URL}/visitors/${id}`, body);
  }

  // Api for Companiess
   getCompanies(): Observable<Company[]> {
      return this.Http.get<Company[]>(`${URL}/companies`);
   }

}
