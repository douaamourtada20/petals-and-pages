
import { categories } from "../data/products";

function CategoryFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="category-filter d-flex flex-wrap justify-content-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-btn ${
            selectedCategory === category ? "active" : ""
          }`}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
