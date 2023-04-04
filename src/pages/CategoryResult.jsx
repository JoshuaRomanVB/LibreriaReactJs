import { useParams } from 'react-router-dom';
import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const CategoryResult = () => {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);


  const navigate = useNavigate();

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };


  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${categoryName}`);
      const data = await response.json();
      setBooks(data.items);
    };
    fetchBooks();
  }, [categoryName]);

  return (
    <div className='margin-top'>
      <h2>Resultados de la categoría {categoryName}</h2>
      <ul>
      {books.map((book) => (
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
      </ul>
    </div>
  );
};

export default CategoryResult;