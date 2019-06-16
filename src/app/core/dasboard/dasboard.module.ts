import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorComponent } from './components/visitor/visitor.component';
import { VisitorListComponent } from './components/visitor-list/visitor-list.component';
import { MaterialModule } from '../../material.module';
import { VisitorService } from './services/visitor.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  declarations: [VisitorComponent, VisitorListComponent],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NavigationModule,
    SharedModule
  ],
  exports: [
    VisitorComponent, VisitorListComponent
  ],
  providers: [
    VisitorService
  ]
})
export class DasboardModule { }
