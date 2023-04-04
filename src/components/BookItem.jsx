import React from 'react';
import { useNavigate } from 'react-router-dom';
const BookItem = ({ book }) => {
  const { volumeInfo } = book;

  const navigate = useNavigate();

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div className="book-card " onClick={() => handleBookClick(book.id)}>
      <img
        src={volumeInfo.imageLinks?.thumbnail}
        alt={volumeInfo.title}
        className="book-cover"
      />
      <div className="book-info">
        <h3 className="book-title">{volumeInfo.title}</h3>
        <p className="book-author">{volumeInfo.authors?.join(', ')}</p>
    
      </div>
    </div>
  );
};

export default BookItem;
