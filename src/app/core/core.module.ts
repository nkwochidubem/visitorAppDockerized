import { NavigationModule } from './navigation/navigation.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DasboardModule } from './dasboard/dasboard.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DasboardModule,
    AuthModule,
    SharedModule,
    NavigationModule
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { }
