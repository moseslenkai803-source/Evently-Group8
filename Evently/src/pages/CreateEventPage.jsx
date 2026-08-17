import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function CreateEventPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    category: 'Networking',
    price: '',
    image: '',
    host: '',
    description: '',
  });

  const categories = ['Fitness', 'Networking', 'Music', 'Business', 'Wellness', 'Culture'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    if (!formData.title || !formData.date || !formData.time || !formData.location || !formData.category) {
      alert('Please fill in all required fields');
      return;
    }
    // on create form submittion
    alert(`Event "${formData.title}" created successfully!`);
    // Reset form and navigate back
    setFormData({
      title: '',
      date: '',
      time: '',
      location: '',
      category: 'Networking',
      price: '',
      image: '',
      host: '',
      description: '',
    });
    navigate('/');
  };

  return (
    <div className="page-content">
      <Link to="/" className="back-link">← Back to home</Link>
      
      <div className="create-event-container">
        <div className="create-event-header">
          <h1>Create Your Event</h1>
          <p>Share your event with the community and connect with people who share your passion.</p>
        </div>

        <form className="event-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Event Title *</label>
            <input
              id="title"
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g., Summer Music Festival"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date">Date *</label>
              <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time *</label>
              <input
                id="time"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">Location *</label>
              <input
                id="location"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Uhuru Park, Nairobi"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="e.g., Ksh 250"
              />
            </div>

            <div className="form-group">
              <label htmlFor="host">Host Name</label>
              <input
                id="host"
                type="text"
                name="host"
                value={formData.host}
                onChange={handleChange}
                placeholder="Your name or organization"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Event Image URL</label>
            <input
              id="image"
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tell people about your event..."
              rows="5"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="primary-button">Create Event</button>
            <button type="button" className="secondary-button" onClick={() => navigate('/')}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
