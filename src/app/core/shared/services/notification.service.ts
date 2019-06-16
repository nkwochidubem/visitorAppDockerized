import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  config: MatSnackBarConfig = {
    duration: 3000,
    horizontalPosition: 'right',
    verticalPosition: 'top',
    panelClass: ['snackbar-success', 'snackbar-notification']

  };

  constructor(public snackbar: MatSnackBar) { }

  success(msg) {
    this.config.panelClass = 'snackbar-success';
    this.snackbar.open(msg, '', this.config);
  }

  warn(msg) {
    this.config.panelClass = 'snackbar-notification';
    this.snackbar.open(msg, '', this.config);
  }
}
