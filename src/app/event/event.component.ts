import { Component, OnInit } from '@angular/core';
import { Event } from 'model/event';
import  { EventService} from 'Service/event.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

events!: Event[];
constructor(private eventService: EventService) {
}


  ngOnInit(): void {
  this.eventService.findAll().subscribe(data =>{
    this.events=data;
  })
  }

}
