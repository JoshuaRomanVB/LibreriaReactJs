import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetPopularAuthors = (numAuthors, apiKey) => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=inauthor:&orderBy=newest&maxResults=${numAuthors}&key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      const newAuthors = response.data.items.map((item) => item.volumeInfo.authors[0]);
      setAuthors(newAuthors);
    });
  }, [apiKey, numAuthors]);

  return authors;
};

export default useGetPopularAuthors;
