import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { DailogService } from './services/dailog.service';
import { ConfirmDailogComponent } from './components/confirm-dailog/confirm-dailog.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [
    ConfirmDailogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [DailogService, ApiService],
  bootstrap: []
})
export class SharedModule { }
