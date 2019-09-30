import { AuthService } from './../../../auth/services/auth.service';
import { ApiService } from './../../../shared/services/api.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { DailogService } from 'src/app/core/shared/services/dailog.service';
import { NotificationService } from 'src/app/core/shared/services/notification.service';
import { remove } from 'lodash';
import { Visitor } from '../../models/visitor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  visitorData: any = [];
  dataSource: MatTableDataSource<Visitor>;
  searchKey: string;
  displayedColumns: string[] = [
    'fullName',
    'date',
    'timeIn',
    'timeOut',
    'whomToVisit',
    // 'company',
    'purpose',
    'actions'
  ];

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator , { static: false}) paginator: MatPaginator;

  constructor(private dialogService: DailogService, private notificationService: NotificationService,
              private apiService: ApiService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.apiService.getVisitor()
    .subscribe(data => {
      this.visitorData = data;
      console.log(this.visitorData);
      this.dataSource = new MatTableDataSource<Visitor>(this.visitorData);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    }, err => {
      this.notificationService.warn('failed to get Visitors');
    });

   }

  onSearchClear() {
    this.searchKey = '';
    this.applyFilter();
  }

  applyFilter() {
    this.dataSource.data.forEach(element => {
      element.date = new Date(element.date);
      // console.log(element.date);
    });
    this.dataSource.filter = this.searchKey.trim().toLowerCase();

  }

  onCreate() {
    this.router.navigate(['visitors', 'new']);
  }

  onEdit(id) {
     this.router.navigate(['visitors', id]);
  }

  onDelete(id) {
    this.dialogService.openConfirmDialog('Are you sure you want to delete this record ?')
    .afterClosed().subscribe(res => {
      if (res) {
        this.apiService.deleteVisitor(id)
        .subscribe(data => {
          const removedRecord = remove(this.dataSource.data, (item) => {
            return item._id === data._id;
          });
          this.dataSource.data = [...this.dataSource.data];
          this.notificationService.warn('Record deleted successfully');
        },
        err => {
            console.log(err);
        });

      }
    });

  }


}
