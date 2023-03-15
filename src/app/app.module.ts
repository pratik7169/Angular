import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventService } from 'Service/event.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdateEventComponent } from './update-event/update-event.component';

import { DeleteEventComponent } from './delete-event/delete-event.component';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    UpdateEventComponent,
    EventFormComponent,
    DeleteEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
