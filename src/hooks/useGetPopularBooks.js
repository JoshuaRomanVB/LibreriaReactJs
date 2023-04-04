import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetPopularBooks = (numBooks, apiKey) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?key=${apiKey}&q=subject:fiction&orderBy=newest&maxResults=${numBooks}`
      )
      .then((response) => {
        setData(response.data.items);
      })
      .catch((error) => console.log(error));
  }, [numBooks, apiKey]);

  return data;
};

export default useGetPopularBooks;
