import React, { useState, useEffect } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { EditModalFalse } from "../features/editModalSlice";

const EditBook = ({book}) => {
  const dispatch = useDispatch();
  let [title, setTitle] = useState("");
  let [author, setAuthor] = useState("");
  let [year, setYear] = useState("");
  let [selectedFile, setSelectedFile] = useState(null);
  let [error, setError] = useState("");

  const handleOldBook = async ()=>{
    setTitle(book.title) 
    setAuthor(book.author)
    setYear(book.year)
  }

  useEffect(()=>{
    handleOldBook()
  }, [])
  

  const handleFileChange = (files) => {
    setSelectedFile(files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = {
      title: title,
      author: author,
      year: year,
      image: selectedFile,
    };
    try {
      await axios.put(
        `https://book-api-modenbo-technologies.vercel.app/api/books/${book.id}/`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Book added successfully, perform any further actions, e.g., redirect, update state, etc.
      dispatch(EditModalFalse()) && window.location.reload();
    } catch (error) {
      console.error("Error adding book:", error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      method="post"
      enctype="multipart/form-data"
      className="max-w-md mx-auto p-6 bg-white rounded shadow-md"
    >
      <button
        className="closeButton rounded-[4px] select-none box-border flex justify-center items-center text-center p-1 ml-auto  border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
        onClick={() => dispatch(EditModalFalse())}
      >
        <span className=" -mt-1 flex justify-center items-center  bg-transparent text-white opacity-95 h-6 w-6 text-2xl  outline-none focus:outline-none">
          x
        </span>
      </button>
      <h2 className="text-2xl font-semibold mb-6 text-center">Edit The Book</h2>
      <h2 className=" text-red-500 font-semibold text-center mb-3">{error}</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title:
        </label>
        <input
          required
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Author:
        </label>
        <input
          required
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Year:
        </label>
        <input
          required
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Cover:
        </label>
        <Dropzone onDrop={handleFileChange} accept="image/*" multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border border-dashed border-gray-400 rounded px-4 py-8 text-center cursor-pointer hover:border-gray-700"
            >
              <input {...getInputProps()} />
              {selectedFile ? (
                <p>Selected Cover: {selectedFile.name}</p>
              ) : (
                <p>Drag and drop an image here, or click to select one</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Save Book
      </button>
    </form>
  );
};

export default EditBook;
