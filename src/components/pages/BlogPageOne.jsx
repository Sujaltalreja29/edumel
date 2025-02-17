import React, { useState, useEffect } from 'react';
import Layout from '../../common/Layout';
import { PageBanner } from '../layouts/blog/index';
import './BooksPage.css';

const BookData = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Literature",
    price: 29.99,
    date: "March 15, 2024",
    description: "A compelling story of racial injustice and loss of innocence in the American South"
  },
  {
    id: 2,
    title: "Advanced Mathematics",
    author: "Michael Thompson",
    category: "Mathematics",
    price: 45.99,
    date: "March 14, 2024",
    description: "Comprehensive guide to advanced mathematical concepts and problem-solving"
  },
  {
    id: 3,
    title: "World History",
    author: "Sarah Johnson",
    category: "History",
    price: 35.99,
    date: "March 13, 2024",
    description: "An in-depth exploration of world history from ancient civilizations to modern times"
  },
  {
    id: 4,
    title: "Chemistry Fundamentals",
    author: "David Wilson",
    category: "Science",
    price: 42.99,
    date: "March 12, 2024",
    description: "Essential concepts in chemistry with practical applications and examples"
  },
  {
    id: 5,
    title: "Spanish for Beginners",
    author: "Maria Garcia",
    category: "Languages",
    price: 27.99,
    date: "March 11, 2024",
    description: "A beginner's guide to Spanish language with practical exercises"
  },
  {
    id: 6,
    title: "Biology Essentials",
    author: "Robert Brown",
    category: "Science",
    price: 38.99,
    date: "March 10, 2024",
    description: "Fundamental principles of biology with detailed illustrations and examples"
  },
  {
    id: 7,
    title: "English Literature",
    author: "Emily White",
    category: "Literature",
    price: 32.99,
    date: "March 9, 2024",
    description: "A comprehensive survey of English literature through the ages"
  },
  {
    id: 8,
    title: "Physics Principles",
    author: "Alan Parker",
    category: "Science",
    price: 47.99,
    date: "March 8, 2024",
    description: "Core physics concepts explained with practical applications"
  }
];

const BookGridItem = ({ data }) => {
  return (
    <div className="book-card">
      <div className="book-content">
        <div className="category-wrap">
          <a href="#" className="book-category">{data.category}</a>
        </div>
        <h3 className="book-title">
          <a href={`/books/${data.id}`}>{data.title}</a>
        </h3>
        <div className="book-meta">
          <span className="author">By <a href="#">{data.author}</a></span>
          <span className="separator">•</span>
          <span className="date">{data.date}</span>
        </div>
        <p className="book-description">{data.description}</p>
        <div className="book-footer">
          <p className="book-price">${data.price}</p>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const SearchWidget = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };
  
  return (
    <div className="search-widget">
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search books..." 
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
    </div>
  );
};

const LatestBooks = ({ books, extraClass }) => {
  const latestBooks = books.slice(0, 3);
  
  return (
    <div className={`latest-books-widget ${extraClass}`}>
      <div className="widget-inner">
        <h5 className="widget-title">Latest Books</h5>
        <div className="latest-books-list">
          {latestBooks.map((book) => (
            <div className="latest-book-item" key={book.id}>
              <div className="book-content">
                <h6 className="title">
                  <a href={`/books/${book.id}`}>{book.title}</a>
                </h6>
                <p className="author">{book.author}</p>
                <p className="price">${book.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Categories = ({ categories, onCategorySelect, selectedCategory, extraClass }) => {
  return (
    <div className={`categories-widget ${extraClass}`}>
      <div className="widget-inner">
        <h5 className="widget-title">Categories</h5>
        <div className="categories-list">
          <div 
            className={`category-item ${selectedCategory === '' ? 'active' : ''}`}
            onClick={() => onCategorySelect('')}
          >
            All
          </div>
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`category-item ${selectedCategory === category.name ? 'active' : ''}`}
              onClick={() => onCategorySelect(category.name)}
            >
              {category.name} ({category.count})
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Tags = ({ tags, onTagSelect, selectedTags, extraClass }) => {
  const handleTagClick = (tag) => {
    onTagSelect(tag);
  };
  
  return (
    <div className={`tags-widget ${extraClass}`}>
      <div className="widget-inner">
        <h5 className="widget-title">Tags</h5>
        <div className="tags-list">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className={`tag-item ${selectedTags.includes(tag) ? 'active' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const BooksPage = () => {
  const [filteredBooks, setFilteredBooks] = useState(BookData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  
  const categories = [
    { id: 1, name: "Literature", count: BookData.filter(book => book.category === "Literature").length },
    { id: 2, name: "Mathematics", count: BookData.filter(book => book.category === "Mathematics").length },
    { id: 3, name: "Science", count: BookData.filter(book => book.category === "Science").length },
    { id: 4, name: "History", count: BookData.filter(book => book.category === "History").length },
    { id: 5, name: "Languages", count: BookData.filter(book => book.category === "Languages").length }
  ];
  
  const tags = ["Literature", "Fiction", "Science", "Math", "History", "Language", "Academic", "Reference"];

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTagSelect = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  useEffect(() => {
    let result = BookData;

    // Apply search filter
    if (searchQuery) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory) {
      result = result.filter(book => book.category === selectedCategory);
    }

    // Apply tags filter
    if (selectedTags.length > 0) {
      result = result.filter(book => 
        selectedTags.some(tag => 
          book.category.includes(tag) || 
          book.description.includes(tag)
        )
      );
    }

    setFilteredBooks(result);
  }, [searchQuery, selectedCategory, selectedTags]);

  return (
    <div className="books-page">
      <Layout>
        <PageBanner
          title="Books List"
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Books"
        />

        <div className="page-wrapper">
          <div className="container">
            <div className="books-content">
              <div className="books-grid">
                {filteredBooks.map((item) => (
                  <BookGridItem key={item.id} data={item} />
                ))}
                
                <div className="pagination">
                  <button className="pagination-arrow">←</button>
                  <button className="pagination-number active">1</button>
                  <button className="pagination-number">2</button>
                  <button className="pagination-number">3</button>
                  <button className="pagination-arrow">→</button>
                </div>
              </div>
              
              <div className="sidebar">
                <SearchWidget onSearch={handleSearch} />
                <LatestBooks books={BookData} extraClass="widget-spacing" />
                <Categories 
                  categories={categories}
                  onCategorySelect={handleCategorySelect}
                  selectedCategory={selectedCategory}
                  extraClass="widget-spacing"
                />
                <Tags 
                  tags={tags}
                  onTagSelect={handleTagSelect}
                  selectedTags={selectedTags}
                  extraClass="widget-spacing"
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BooksPage;