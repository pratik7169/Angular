import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'model/event';
import  { EventService} from 'Service/event.service';
@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit {
  event: Event ;
 
  id:any;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private eventService: EventService) {
    this.event = new Event();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  updateEvent(event:Event){
    let id = parseInt(event.id);
    this.eventService.update(this.event,id).subscribe(result => {
      console.log("Update event"+result);
      this.gotoEvent()});
  }

  gotoEvent() {
    this.router.navigate(['../']);
  }
}
