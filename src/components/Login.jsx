import Header from "./Header";

const Login = () => {
  return (
    <div className="relative w-full h-screen">
      <Header />

      <img
        src="/Banner.jpg"
        alt="Banner"
        className="w-full h-full object-cover bg-black bg-opacity-50"
      />
      <div className=" relative bg-black bg-opacity-80"></div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4">
        <h1 className="text-2xl md:text-4xl font-extrabold text-white">
          Unlimited movies, TV shows, and more.
        </h1>
        <p className="text-sm md:text-lg font-semibold text-white bg-blue-500 px-4 py-2 mt-4 inline-block">
          Starts at ₹149. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default Login;
