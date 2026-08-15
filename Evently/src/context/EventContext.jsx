import { createContext, useState, useEffect } from 'react';
import { sampleEvents } from '../data';

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState(() => {
    // Guard localStorage access for SSR
    if (typeof localStorage === 'undefined') {
      return sampleEvents;
    }
    
    try {
      const savedEvents = localStorage.getItem('events');
      if (savedEvents) {
        const parsed = JSON.parse(savedEvents);
        // Accept only if it's an array of event records
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (error) {
      // JSON.parse failure - silently fall back to sampleEvents
      console.error('Error parsing events from localStorage:', error);
    }
    
    return sampleEvents;
  });

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
