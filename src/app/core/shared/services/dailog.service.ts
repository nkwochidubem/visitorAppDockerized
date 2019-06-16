import { ConfirmDailogComponent } from './../components/confirm-dailog/confirm-dailog.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class DailogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg) {
    return this.dialog.open(ConfirmDailogComponent, {
      width: '400px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: msg
      }
    });
  }

}
