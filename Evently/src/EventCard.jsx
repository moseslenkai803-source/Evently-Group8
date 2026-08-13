import { Link } from 'react-router-dom';

export default function EventCard({ event }) {
  return (
    <article className="event-card">
      <img src={event.image} alt={event.title} className="event-card-image" />
      <div className="event-card-content">
        <div className="event-card-meta">
          <span>{event.category}</span>
          <span>{event.price}</span>
        </div>
        <h3>{event.title}</h3>
        <p className="event-card-date">{event.date} • {event.time}</p>
        <p className="event-card-location">{event.location}</p>
        <p>{event.description}</p>
        <Link to={`/event/${event.id}`} className="primary-button">
          View details
        </Link>
      </div>
    </article>
  );
}
