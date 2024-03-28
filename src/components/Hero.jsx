import { Link } from "react-router-dom";
import Wing from "/wing.png";
const Hero = () => {
  return (
    <div className="  bg-base-200 rounded-2xl p-10 ">
      <div className="hero-content flex-col flex sm:flex-row-reverse items-center sm:text-start text-center  justify-around  ">
        <img className="md:h-auto h-60" src={Wing} />
        <div>
          <h1 className="lg:text-4xl sm:text-2xl text-base  font-bold leading-snug">
            Books to freshen up <span className="block">your bookshelf</span>
          </h1>

          <Link to="/books">
              <button className="btn bg-primary hover:bg-green-500 font-medium text-white mt-10">
              View The List
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
