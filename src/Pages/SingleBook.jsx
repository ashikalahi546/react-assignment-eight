import { useLoaderData, useParams } from "react-router-dom";

const SingleBook = () => {
  const singleBook = useLoaderData();
  const { id } = useParams();
  console.log(singleBook, id);
  return (
    <div>
      <h2>Singel book :{singleBook.bookName}</h2>
    </div>
  );
};

export default SingleBook;
