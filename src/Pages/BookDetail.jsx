import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookDetail = ({ bookDetail }) => {
  const { image, bookName, author, rating, category, tags, bookId } = bookDetail;
  console.log(bookId)
  return (
    <Link to={`/book/${bookId}`}>
      <div className="flex flex-col gap-10  border rounded-xl p-5">
        <div className="bg-gray-50 px-16 py-6 rounded-xl flex justify-center">
          <img className="w-32 h-44" src={image} alt="" />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-3 font-medium text-primary ">
            {tags.map((tag) => (
              <h2 className="bg-green-50 px-5 rounded-full">{tag}</h2>
            ))}
          </div>
          <h1 className="text-2xl font-medium">{bookName}</h1>
          <h2 className="font-medium">By: {author}</h2>

          <div className="border-b border-dashed"></div>
          <div className="flex items-center justify-between">
            <h2 className="font-medium">{category}</h2>
            <div className="flex items-center gap-2">
              {rating}
              <CiStar className="text-xl"></CiStar>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookDetail;
