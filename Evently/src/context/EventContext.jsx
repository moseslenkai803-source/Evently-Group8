import { createContext, useContext, useState, useEffect } from 'react';
import { sampleEvents } from '../data';

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  // Load events from localStorage on mount, or use sample events
  useEffect(() => {
    const savedEvents = localStorage.getItem('events');
    if (savedEvents) {
      setEvents(JSON.parse(savedEvents));
    } else {
      setEvents(sampleEvents);
    }
  }, []);

  // Save events to localStorage whenever they change
  useEffect(() => {
    if (events.length > 0) {
      localStorage.setItem('events', JSON.stringify(events));
    }
  }, [events]);

  const addEvent = (newEvent) => {
    const eventWithId = {
      ...newEvent,
      id: Math.max(...events.map((e) => e.id), 0) + 1,
    };
    setEvents([...events, eventWithId]);
    return eventWithId;
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
}
