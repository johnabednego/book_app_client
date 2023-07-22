import React, { useState, useEffect } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import { useDispatch } from "react-redux";
import { ModalTrue } from "../features/modalSlice";

const BookList = () => {
  const dispatch = useDispatch();
  const [booksData, setBooksData] = useState([]);
  let [fetching, setFetching] = useState(true)

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://book-api-modenbo-technologies.vercel.app/api/books/"
      );
      setBooksData(response.data);
      setFetching(false)
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleDeleteBook = (deletedBookId) => {
    setBooksData((prevBooks) =>
      prevBooks.filter((book) => book.id !== deletedBookId)
    );
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className=" w-full items-center flex flex-col">
      <button
        type="button"
        onClick={()=>dispatch(ModalTrue())}
        className=" mt-3 fixed w-fit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Add Book
      </button>
      
      {fetching? (
        <button
          type="button"
          className=" mt-16 drop-shadow-md bg-[#022038] inline-flex items-center px-4 py-2 text-sm font-semibold leading-6 text-white transition duration-150 ease-in-out rounded-md shadow cursor-not-allowed hover:bg-[#022038] hover:opacity-20 "
          disabled="">
          <svg
            class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24">
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          Fetching...
        </button>
      ) : (
        <div className=" mt-12 w-full justify-center flex flex-wrap">
          {booksData.map((book) => (
            <BookItem key={book.id} book={book} onDelete={handleDeleteBook} />
          ))}
        </div>
      )}

      {!fetching && booksData.length<1?
        <div className=" mt-16 text-center items-center justify-center flex flex-col">
        <h1 className="text-[25px] ">Ooops!!! There are no Books!!!</h1>
        <h1>Please Add Books!!!</h1>
      </div>:null  
    }
    </div>
  );
};

export default BookList;
