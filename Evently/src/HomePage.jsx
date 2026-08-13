import { useState } from 'react';
import { Link } from 'react-router-dom';
import { sampleEvents } from './data';
import EventCard from './EventCard';
import CategoryFilter from './components/CategoryFilter';

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [...new Set(sampleEvents.map((event) => event.category))];
  
  const filteredEvents = selectedCategory === 'all'
    ? sampleEvents
    : sampleEvents.filter((event) => event.category === selectedCategory);
  
  const featured = filteredEvents.slice(0, 3);
  const trending = filteredEvents.slice(1, 4);
  const personalized = filteredEvents.slice(2, 5);

  return (
    <div>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Your next favorite night</p>
          <h1>Find events that move you.</h1>
          <p>
            From sunrise yoga to late-night music, discover experiences built for your vibe.
          </p>
          <div className="hero-actions">
            <Link to="/explore" className="primary-button">Explore events</Link>
            <Link to="/create" className="secondary-button">Host an event</Link>
          </div>
        </div>
        <div className="hero-visual">
          <img
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80"
            alt="Crowd at a festival"
          />
        </div>
      </section>

      <div className="events-container">
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="page-content events-content">
          <section className="events-section">
            <div className="section-heading">
              <h2>Upcoming events</h2>
              <Link to="/explore">View all</Link>
            </div>
            <div className="event-grid">
              {featured.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          <section className="events-section">
            <div className="section-heading">
              <h2>Trending now</h2>
              <Link to="/explore">View all</Link>
            </div>
            <div className="event-grid">
              {trending.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>

          <section className="events-section">
            <div className="section-heading">
              <h2>For you</h2>
              <Link to="/profile">Personalized picks</Link>
            </div>
            <div className="event-grid">
              {personalized.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
