const Browse = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <h1 className="text-center text-2xl md:text-4xl font-bold pt-10">
        Welcome to Netflix GPT
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        <div className="bg-gray-800 h-40 rounded-lg"></div>
        <div className="bg-gray-800 h-40 rounded-lg"></div>
        <div className="bg-gray-800 h-40 rounded-lg"></div>
        <div className="bg-gray-800 h-40 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Browse;
