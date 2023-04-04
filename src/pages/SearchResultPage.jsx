import { useParams } from 'react-router-dom';
import SearchResults from '@Components/SearchResults';
import React, { useState, useEffect } from 'react';
import '@styles/SearchResultPage.scss';
function SearchResultsPage() {
  const { searchTerm } = useParams();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        setSearchResult(data.items);
      });
  }, [searchTerm]);

  return (
    <div className='margin-top'>
      <h1 >Resultados de busqueda "{searchTerm}"</h1>
      <SearchResults searchResult={searchResult} />
    </div>
  );
}
export default SearchResultsPage;