import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen text-center flex flex-col  justify-center items-center gap-4">
      <h3 className="text-2xl"> not found page.</h3>
      <Link className="btn bg-primary text-white w-32" to="/">
        Back
      </Link>
    </div>
  );
};

export default Error;
