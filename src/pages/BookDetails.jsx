import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import parse from 'html-react-parser';
import '@styles/BookDetails.scss';
function BookDetails() {
  const [book, setBook] = useState(null);
  const { bookId } = useParams();

  const isHTML = (str) => {
    const htmlRegex = /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/;
    return htmlRegex.test(str);
  };

  
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((response) => response.json())
      .then((data) => {
        setBook(data);
      });
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const {
    title,
    authors,
    publisher,
    publishedDate,
    description,
    categories,
    averageRating,
    ratingsCount,
    imageLinks,
    previewLink,
    buyLink
  } = book.volumeInfo;

  const html = isHTML(description) ? description : `<p>${description}</p>`;
  const reactElements = parse(html);
  


  return (
    <div className="container my-4 margin-top">
      <div className="row">
        <div className="col-md-4 mb-3">
          <img src={imageLinks.thumbnail} alt={title} className="w-100" />
        </div>
        <div className="col-md-8">
          <h1>{title}</h1>
          <h4 className="text-muted">{authors && authors.join(', ')}</h4>
          <p className="lead">{reactElements}</p>
          <hr />
          <div className="row mb-3">
            <div className="col-md-4">
              <h6 className="text-muted">Publisher:</h6>
              <p>{publisher}</p>
            </div>
            <div className="col-md-4">
              <h6 className="text-muted">Published Date:</h6>
              <p>{publishedDate}</p>
            </div>
            <div className="col-md-4">
              <h6 className="text-muted">Categories:</h6>
              <p>{categories && categories.join(', ')}</p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Average Rating:</h6>
              <p>{averageRating}</p>
            </div>
            <div className="col-md-6 mb-3">
              <h6 className="text-muted">Ratings Count:</h6>
              <p>{ratingsCount}</p>
            </div>
          </div>
          <div className="d-flex flex-row align-items-center">
            <a href={previewLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">
              Preview
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
