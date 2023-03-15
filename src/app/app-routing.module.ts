import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventComponent } from './event/event.component';
import { UpdateEventComponent } from './update-event/update-event.component';

const routes: Routes = [
  { path: 'event', component: EventComponent },
  { path: 'addevent', component: EventFormComponent },
  { path: 'deleteevent', component:DeleteEventComponent },
  {path:"updateevent", component:UpdateEventComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
