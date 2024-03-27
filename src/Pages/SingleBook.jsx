import { useLoaderData, useParams } from "react-router-dom";

const SingleBook = () => {
  const singleBook = useLoaderData();
  const { bookId } = useParams();

  const parInt = parseInt(bookId);
  const single = singleBook.find((e) => e.bookId === parInt);
  // console.log(single)
  // "bookId": 1,
  // "bookName": "The Silent Witness",
  // "author": "Emily Griffin",
  // "image": "https://i.ibb.co/SXTtZ7g/kindpng-7318921.png",
  // "review": "A gripping tale of mystery and intrigue that keeps you guessing until the very end.",
  // "totalPages": 320,
  // "rating": 4.5,
  // "category": "Mystery",
  // "tags": ["Suspense", "Psychological"],
  // "publisher": "HarperCollins",
  // "yearOfPublishing": 2023

  return (
    <div className="grid grid-cols-2 gap-10 mx-40 my-10">
      <div className="bg-gray-50 px-8 py-16 flex items-center justify-center rounded-xl">
        <img className="w-64" src={single.image} alt="" />
      </div>
      <div className="flex flex-col gap-3.5">
        <h1 className="text-2xl font-medium">{single.bookName}</h1>
        <h3>By : {single.author}</h3>
        <hr />
        <h3 className="font-medium">{single.category}</h3>
        <hr />
        <p>
          <span className="font-medium">Review : </span>{" "}
          <span>{single.review}</span>
        </p>
        <div className="flex gap-4 font-medium items-center">
          Tag
          <span className="flex gap-4">
            {" "}
            {single.tags.map((tag) => (
              <h2 className="bg-green-200 px-5 py-0.5 rounded-full text-green-500 text-sm">
                #{tag}
              </h2>
            ))}
          </span>
        </div>
        <hr />
        <div className="space-y-2">
          <h4 className="grid grid-cols-2"><span>Number of Pages :</span> <span className="font-medium"> {single.totalPages}</span></h4>
          <h4 className="grid grid-cols-2"><span> Publisher :</span> <span className="font-medium"> {single.publisher}</span></h4>
          <h4 className="grid grid-cols-2"><span>Year of Publishing: :</span> <span className="font-medium"> {single.yearOfPublishing}</span></h4>
          <h4 className="grid grid-cols-2"><span>Rating :</span> <span className="font-medium"> {single.rating}</span></h4>
     
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
