import { CoreModule } from './core/core.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { VisitorComponent } from './core/dasboard/components/visitor/visitor.component';
import { ConfirmDailogComponent } from './core/shared/components/confirm-dailog/confirm-dailog.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [VisitorComponent, ConfirmDailogComponent]
})
export class AppModule { }
