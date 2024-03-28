import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleBook = () => {
  const singleBook = useLoaderData();
  const { bookId } = useParams();

//   const handleClick = (event) => {
  
// if(event){
//   toast('Books Added to Read List');
// }else{
//   toast.error('You have Already Read this Books');
// }
//   }

const handle = ()=> toast('Books Added to Read List')
const handle2 = ()=> toast.error('Books Added to Read List')

 


  const parInt = parseInt(bookId);
  const single = singleBook.find((e) => e.bookId === parInt);


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
            {single.tags.map((tag,idx) => (
              <h2 key={idx} className="bg-green-200 px-5 py-0.5 rounded-full text-green-500 text-sm">
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


        <div 
        className="mt-5">
          <Link onClick={handle} className="btn px-5 hover:bg-primary hover:text-white"><button>Read</button></Link>
          <Link onClick={handle2}  className="btn bg-[#50B1C9] text-white ml-3 px-5"><button>Wishlist</button></Link>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
