
import { useEffect, useState } from "react";
import Book from "./Book";
const ReadBooks = () => {
      const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
    return (
        <div>

      <div className="flex flex-col gap-10 my-10">
        {books.map((book, id) => (
          <Book book={book} key={id}></Book>
        ))}
      </div>          
        </div>
    );
};

export default ReadBooks;
