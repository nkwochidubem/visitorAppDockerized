import { Visitor } from './../../models/visitor';
import { ApiService } from './../../../shared/services/api.service';
import { NotificationService } from 'src/app/core/shared/services/notification.service';
import { VisitorService } from './../../services/visitor.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.css']
})
export class VisitorComponent implements OnInit {
  visitor: Visitor;
  visitorName: boolean;
  visitorForm: FormGroup;
  constructor(public visitorService: VisitorService , private fb: FormBuilder,
              private notificationService: NotificationService,
              private apiService: ApiService, private router: Router,
              private route: ActivatedRoute) { }

  company  = [
    {name: 'VPS Tech', id: 'VPS'},
    {name: 'Softclo', id: 'SFC'}
  ];

  ngOnInit() {

    this.createForm();
    this.setInvoiceToForm();

  }


  onCancel() {
    this.visitorForm.reset();
    this.router.navigate(['visitors']);
  }


  onSubmit() {
    if (this.visitorForm.valid) {
      if (this.visitor) {
        this.apiService.updateVisitor(this.visitor._id, this.visitorForm.value)
        .subscribe(data => {
          this.notificationService.success('updated successfully');
          this.visitorForm.reset();
          this.router.navigate(['visitors']);
        });
      } else {
        this.apiService.createVisitor(this.visitorForm.value)
        .subscribe(data => {
          console.log(data);
        },
        err => {
          console.log(err);
        });
        this.router.navigate(['visitors']);
        this.visitorForm.reset();
        this.notificationService.success('Form Submitted Successfully');
      }
  }

}

createForm() {
  this.visitorForm = this.fb.group({
    fullName: ['', Validators.required],
    date: ['', Validators.required],
    purpose: ['' , Validators.required],
    timeIn: ['', Validators.required],
    whomToVisit: ['', Validators.required],
   // company: ['', Validators.required],
    phone: ['' ],
    address: ['' ],
    timeOut: ['' ],
    tagNo: [''],
    gender: ['1']
  });

}
setInvoiceToForm() {
  this.route.params.subscribe(params => {
    const id = params.id;
    if (!id) {
      return;
    } else {
      this.apiService.findVisitorById(id)
      .subscribe(data => {
        this.visitor = data;
        this.visitorForm.patchValue(this.visitor);
      }, err => {
        this.notificationService.warn('failed to Set Invoice');
      });
    }
  });

}

}
