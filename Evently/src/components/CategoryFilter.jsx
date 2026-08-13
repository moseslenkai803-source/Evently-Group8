export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-section">
        <h3>Filter by Category</h3>
        <div className="filter-options">
          <label className="filter-option">
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={(e) => onCategoryChange(e.target.value)}
            />
            <span>All Categories</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="filter-option">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => onCategoryChange(e.target.value)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
