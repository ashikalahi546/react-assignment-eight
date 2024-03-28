import { Link, Outlet } from "react-router-dom";
import { SlArrowDown } from "react-icons/sl";
import {  useState } from "react";
// import { useEffect, useState } from "react";
// import Book from "./Book";

const Books = () => {
  const [tabIndex,setTabIndex] = useState(0)
  // const [books, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("fakeData.json")
  //     .then((res) => res.json())
  //     .then((data) => setBooks(data));
  // }, []);
  return (
 
    <div>
    
      <h2 className="bg-gray-50 p-5 rounded-lg text-center text-3xl font-bold">
        Books
      </h2>
      <div className="text-center my-5">
        <Link className="btn bg-primary text-white hover:bg-green-500 ">
          Sort By <SlArrowDown />
        </Link>
      </div>
      <div
      

        className="flex items-center   dark:text-gray-300 mt-10 cursor-pointer"
      >
        <Link
          to=''
          onClick={() => setTabIndex(0)}
          className={` px-5 py-3 space-x-2 ${
            tabIndex === 0 ? "border border-b-0" : "border-b "
          }  rounded-t-lg dark:border-gray-300 dark:text-gray-600`}
        >
          Read Books
        </Link>
        <Link
        to={`wishlistbooks`}
          onClick={() => setTabIndex(1)}
          className={`px-5 py-3 space-x-2 ${
            tabIndex === 1 ? "border border-b-0" : "border-b"
          }  rounded-t-lg dark:border-gray-300 dark:text-gray-900`}
        >
          Wishlist Books
        </Link>
      </div>
  <Outlet></Outlet>

      {/* <div className="flex flex-col gap-10 my-10">
        {books.map((book, id) => (
          <Book book={book} key={id}></Book>
        ))}
      </div> */}
    </div>
  );
};

export default Books;
