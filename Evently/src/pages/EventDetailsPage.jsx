import { useParams, Link } from 'react-router-dom';
import { sampleEvents } from '../data';

export default function EventDetailsPage() {
  const { id } = useParams();
  const event = sampleEvents.find((e) => e.id === parseInt(id));

  if (!event) {
    return (
      <div className="page-content">
        <h2>Event not found</h2>
        <Link to="/" className="primary-button">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="page-content">
      <Link to="/" className="back-link">← Back to events</Link>
      
      <div className="event-details">
        <div className="event-details-image">
          <img src={event.image} alt={event.title} />
        </div>
        
        <div className="event-details-content">
          <div className="event-details-meta">
            <span className="category-badge">{event.category}</span>
            <span className="price-badge">{event.price}</span>
          </div>
          
          <h1>{event.title}</h1>
          
          <div className="event-info">
            <div className="info-item">
              <strong>Date & Time</strong>
              <p>{event.date} at {event.time}</p>
            </div>
            
            <div className="info-item">
              <strong>Location</strong>
              <p>{event.location}</p>
            </div>
            
            <div className="info-item">
              <strong>Hosted by</strong>
              <p>{event.host}</p>
            </div>
          </div>
          
          <div className="event-description">
            <h3>About this event</h3>
            <p>{event.description}</p>
          </div>
          
          <button className="primary-button">Register Now</button>
        </div>
      </div>
    </div>
  );
}
