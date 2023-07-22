import React from 'react';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { EditModalTrue } from "../features/editModalSlice";
import { SelectedBook } from '../features/book';

const BookItem = ({ book, onDelete }) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    try {
      // Assuming the endpoint for deleting a book is '/api/books/:id'
      await axios.delete(`https://book-api-modenbo-technologies.vercel.app/api/books/${book.id}`);
      onDelete(book.id); // Call the parent's onDelete function to update the list of books
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleEdit = async (book) =>{
    try {
      dispatch(SelectedBook(book))
      dispatch(EditModalTrue())
    } catch (error) {
      
    }
  }

  return (
    <div className="p-4 border border-gray-300 rounded shadow-md w-60 mx-6 my-3 hover:border-blue-400">
      <div className="mb-4">
        <img src={`${book.image}`} alt={book.title} className="w-full h-48 object-cover mx-auto" />
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{book.title}</h3>
        <p className="text-gray-600"><strong>Author: </strong>{book.author}</p>
        <p className="text-gray-600"> <strong>Year: </strong>{book.year}</p>
      </div>
      <div className="mt-4 text-center flex w-full justify-evenly">
      <button
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={()=>handleEdit(book)}
        >
          Edit
        </button>
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
