import React from "react";
import EditBook from "./EditBook";
const EditingModal = ({book}) => {
  return (
    <div>
      <div className="pt-7 sm:pt-0 h-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0  z-50 outline-none focus:outline-none scrollbar-hide">
        <div className="relative my-6 ">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <EditBook book={book}/>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default EditingModal;
