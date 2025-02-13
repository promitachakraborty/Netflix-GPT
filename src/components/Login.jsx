import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <img src="/Banner.jpg" alt="Banner" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-white text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Unlimited movies, TV shows, and more.
          </h1>
          <p className="text-lg md:text-xl font-semibold text-white bg-blue-500 px-4 py-2 mt-4 inline-block">
            Starts at ₹149. Cancel at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
