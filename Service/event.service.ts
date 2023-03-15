import { Injectable } from '@angular/core';
import { Event } from 'model/event'
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventUrl: string;
  constructor(private http:HttpClient) {
    this.eventUrl ='http://localhost:8080/event';
   }
   public findAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventUrl);
}
public save(event: Event) {
  return this.http.post<Event>(this.eventUrl, event);
}
public delete(id:number):Observable<Object>{
  return this.http.delete(`${this.eventUrl}/${id}`);
}
public update(student: Event,id:number):Observable<Object>{

   return this.http.put(`${this.eventUrl}/${id}`,student);
 }
}