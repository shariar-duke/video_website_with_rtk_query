import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link to="/">
          <img className="h-10" src="/lws.svg" alt="Learn with Sumit" />
        </Link>
        <Link to="/add-video">
        <button className="flex items-center bg-blue-500 text-white font-bold py-2 px-[14px] rounded hover:bg-blue-600">
          <span className="mr-2 text-[16px]">+</span>
          Add Video
        </button></Link>
     
      </div>
    </nav>
  );
}
