package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Entity.Event;
import com.example.Repository.EventRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EventController {
	@Autowired
	EventRepository eventRepository;
	
	
	@GetMapping("/event")
	public List<Event> findAllStudent()
	{
		return (List<Event>)eventRepository.findAll();
	}
	
	@PostMapping("/event")
	public Event createEvent(@RequestBody Event event)
	{
		return eventRepository.save(event);
	}
	
	@DeleteMapping("/event/{id}")
	public void deleteEvent(@PathVariable int id)
	{
		eventRepository.deleteById(id);
	}
	
	@PutMapping("/student/{id}")
	public Event updateEvent(@PathVariable int id,@RequestBody Event event)
	{
		Event _event=eventRepository.findById(event.getId()).get();
		_event.setName(_event.getName());
		_event.setEmail(_event.getEmail());
		return eventRepository.save(_event);
		
	}
}
