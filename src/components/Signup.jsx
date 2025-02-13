const Signup = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 w-full flex items-center justify-between px-10 py-4 bg-gradient-to-b from-black">
        <img src="/netflix_logo.png" alt="Netflix Logo" className="w-32 " />
      </div>
      <div>
        <img src="/Banner.jpg" alt="Banner" />
      </div>
      <div className=" absolute inset-0 flex justify-center items-center ">
        <div className="relative  bg-black bg-opacity-60 p-10 rounded-lg shoadow-lg w-[400px]">
          <h1 className="text-3xl font-bold text-white mb-6 text-center ">
            Sign In
          </h1>
          <form>
            <input
              type="text"
              placeholder="Email or mobile number"
              className="text-white w-full px-3 py-2 mb-4 rounded-md  bg-black bg-opacity-60"
            />
            <input
              type="text"
              placeholder="Password"
              className="text-white w-full px-3 py-2 mb-4 rounded-md  bg-black bg-opacity-60"
            />
            <button className="bg-red-600 text-white w-full px-4 py-3 rounded-md hover:bg-red-700">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
