import React from 'react';
import axios from 'axios';

const BookItem = ({ book, onDelete }) => {
  const handleDelete = async () => {
    try {
      // Assuming the endpoint for deleting a book is '/api/books/:id'
      await axios.delete(`https://book-api-modenbo-technologies.vercel.app/api/books/${book.id}`);
      onDelete(book.id); // Call the parent's onDelete function to update the list of books
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="p-4 border border-gray-300 rounded shadow-md w-60 mx-6 my-3 hover:scale-105 hover:border-blue-400">
      <div className="mb-4">
        <img src={`https://book-api-modenbo-technologies.vercel.app/${book.image}`} alt={book.title} className="w-full h-40 object-cover mx-auto" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600"><strong>Author: </strong>{book.author}</p>
        <p className="text-gray-600"> <strong>Year: </strong>{book.year}</p>
      </div>
      <div className="mt-4 text-center">
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
