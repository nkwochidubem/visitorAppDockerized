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
  companies;

  constructor(public visitorService: VisitorService , private fb: FormBuilder,
              private notificationService: NotificationService,
              private apiService: ApiService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.setInvoiceToForm();
    this.getCompanies();

  }

  onCancel() {
    this.visitorForm.reset();
    this.router.navigate(['visitors']);

  }

  onSubmit() {

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
          this.visitorForm.reset();
          this.notificationService.success('Form Submitted Successfully');
          this.router.navigate(['visitors']);
        },
        err => {
          this.notificationService.warn('Error saving data');
        });

    }

  }

  createForm() {
  this.visitorForm = this.fb.group({
    fullName: ['', Validators.required],
    date: ['', Validators.required],
    purpose: ['' , Validators.required],
    timeIn: ['', Validators.required],
    whomToVisit: ['', Validators.required],
    company: ['', Validators.required],
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

  getCompanies() {
  this.apiService.getCompanies()
  .subscribe(data => {
    this.companies = data;
    console.log(this.companies);
  });
  }


}
