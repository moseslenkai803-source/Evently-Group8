import { useState } from 'react';
import { sampleEvents } from '../data';
import EventCard from '../EventCard';
import CategoryFilter from '../components/CategoryFilter';

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [...new Set(sampleEvents.map((event) => event.category))];

  const filteredEvents = sampleEvents.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="explore-header">
        <div className="explore-header-content">
          <h1>Explore Events</h1>
          <p>Discover amazing events happening near you</p>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search events by name, location, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <span className="search-icon">🔍</span>
          </div>
        </div>
      </div>

      <div className="events-container">
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <div className="page-content events-content">
          <div className="explore-results">
            <div className="results-header">
              <h2>
                {filteredEvents.length} Event{filteredEvents.length !== 1 ? 's' : ''} Found
              </h2>
              {searchQuery && (
                <p className="search-info">
                  Results for "<strong>{searchQuery}</strong>"
                  {selectedCategory !== 'all' && ` in ${selectedCategory}`}
                </p>
              )}
            </div>

            {filteredEvents.length > 0 ? (
              <div className="event-grid">
                {filteredEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>😕 No events found matching your criteria.</p>
                <p className="no-results-hint">
                  {searchQuery ? (
                    <>Try adjusting your search for "<strong>{searchQuery}</strong>" or clear filters.</>
                  ) : (
                    <>No events available in this category. Try browsing other categories!</>
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
