import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'model/event';
import  { EventService} from 'Service/event.service';
@Component({
  selector: 'app-delete-event',
  templateUrl: './delete-event.component.html',
  styleUrls: ['./delete-event.component.css']
})
export class DeleteEventComponent implements OnInit{

  event: Event ;
  

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private eventService: EventService) {
    this.event= new Event();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  deleteEvent(id1:string){
    let id = parseInt(id1);
    this.eventService.delete(id).subscribe(result => this.gotoevent());
  }
  
    gotoevent() {
      this.router.navigate(['../']);
    }
}
