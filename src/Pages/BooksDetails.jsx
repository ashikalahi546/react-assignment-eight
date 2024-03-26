import { useEffect, useState } from "react";
import BookDetail from "./BookDetail";

const BooksDetails = () => {
  const [bookDetails, setBooksDetils] = useState([]);
  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setBooksDetils(data));
  }, []);
  return (
    <div className="my-10">
      <h2 className="text-center text-3xl font-semibold">Books</h2>
      <div className="grid grid-cols-3 gap-5 my-10">
        {bookDetails.map((bookDetail, e) => (
          <BookDetail bookDetail={bookDetail} key={e}></BookDetail>
        ))}
      </div>
    </div>
  );
};

export default BooksDetails;
