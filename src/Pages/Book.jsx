import { IoLocationOutline } from "react-icons/io5";
import { HiMiniUsers } from "react-icons/hi2";
import { MdOutlineInsertPageBreak } from "react-icons/md";

const Book = ({ book }) => {
  const {
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div>
      <div className=" border rounded-xl p-5">
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="bg-gray-50 px-16 py-6 rounded-xl flex justify-center">
        
           <img className="w-32" src={image} alt="" />
          
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-medium">{bookName}</h1>
            <h2 className="font-medium">By: {author}</h2>
            <div className="flex items-center gap-3 ">
              <h3 className="font-medium">Tag</h3>
              <div className="flex gap-3 font-medium text-primary">
                {tags.map((tag) => (
                  <h2>#{tag}</h2>
                ))}
              </div>
              <div className="font-medium flex items-center gap-1.5">
                <IoLocationOutline className="text-lg"></IoLocationOutline> Year
                of Publishing: {yearOfPublishing}
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2 text-gray-600">
                <HiMiniUsers className="text-xl"></HiMiniUsers> Publisher :{" "}
                {publisher}
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MdOutlineInsertPageBreak className="text-xl"></MdOutlineInsertPageBreak>{" "}
                Page {totalPages}
              </div>
            </div>
            <div className="border-b"></div>
            <div className="flex gap-3">
              <h2 className="bg-blue-200 text-blue-500 px-5 py-1 rounded-full">
                Category : {category}
              </h2>
              <h2 className="bg-orange-50 text-orange-300 px-5 py-1 rounded-full">
                Rating : {rating}
              </h2>
              <button className="bg-primary text-white px-5 py-1 rounded-full">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
