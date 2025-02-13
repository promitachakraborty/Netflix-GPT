import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="absolute top-0 w-full flex items-center justify-between px-10 py-4 bg-gradient-to-b from-black">
      <img src="/netflix_logo.png" alt="Netflix Logo" className="w-32 " />

      <div className="flex items-center gap-4">
        <select className="bg-black text-white border border-gray-500 px-3 py-1 rounded-md cursor-pointer">
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
        <Link to="/signup">
          <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
