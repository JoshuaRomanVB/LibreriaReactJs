import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@styles/SearchResults.scss';
import { useNavigate } from 'react-router-dom';

function SearchResults({ searchResult }) {

  const navigate = useNavigate();

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  }; 

  return (
    <div className="row margin-top">
      {searchResult.map((book) => (
        <div className="col-md-4 mb-3" key={book.id}>
          <div className="card h-100" onClick={() => handleBookClick(book.id)}>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className="card-img-top float-start me-3" style={{ width: "100px" }} />
            <div className="card-body">
              <h5 className="card-title">{book.volumeInfo.title}</h5>
              <p className="card-text">{book.volumeInfo.authors?.join(", ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
