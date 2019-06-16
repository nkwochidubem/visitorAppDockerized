import { Visitor } from './../models/visitor';
import { ApiService } from './../../shared/services/api.service';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private apiService: ApiService, private fb: FormBuilder) { }


}
