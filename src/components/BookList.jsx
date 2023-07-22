import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookItem from './BookItem';

const BookList = () => {
  const [booksData, setBooksData] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('https://book-api-modenbo-technologies.vercel.app/api/books/?format=json');
      console.log(response)
      setBooksData(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDeleteBook = (deletedBookId) => {
    setBooksData((prevBooks) => prevBooks.filter((book) => book.id !== deletedBookId));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className=" w-full justify-center flex flex-wrap">
      {booksData.map((book) => (
        <BookItem key={book.id} book={book} onDelete={handleDeleteBook} />
      ))}
    </div>
  );
};

export default BookList;
