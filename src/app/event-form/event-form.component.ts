import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'model/event';
import  { EventService} from 'Service/event.service';
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {
  
  
  event:Event;
  
  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private eventService: EventService) {
    this.event= new Event();
  }
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.eventService.save(this.event).subscribe((result: any) => this.gotoEvent());
  }
  gotoEvent() {
    this.router.navigate(['../']);
  }

}
