// const Signup = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 p-4">
//       {/* Form Box */}
//       <div className="bg-black p-6 md:p-10 rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg relative">
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-white text-2xl"
//           onClick={onClose}
//         >
//           ✖
//         </button>

//         <h1 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
//           Sign In
//         </h1>
//         <form>
//           <input
//             type="text"
//             placeholder="Email or mobile number"
//             className="text-white w-full px-3 py-2 mb-4 rounded-md bg-gray-800 border border-gray-600"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="text-white w-full px-3 py-2 mb-4 rounded-md bg-gray-800 border border-gray-600"
//           />
//           <button className="bg-red-600 text-white w-full px-4 py-3 rounded-md hover:bg-red-700">
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

const Signup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
      {/* Signup Box */}
      <div className="bg-black bg-opacity-70 p-10 rounded-lg shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Sign In Form */}
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Sign In
        </h1>
        <form>
          <input
            type="text"
            placeholder="Email or mobile number"
            className="text-white w-full px-3 py-2 mb-4 rounded-md bg-gray-800 border border-gray-600"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-white w-full px-3 py-2 mb-4 rounded-md bg-gray-800 border border-gray-600"
          />
          <button className="bg-red-600 text-white w-full px-4 py-3 rounded-md hover:bg-red-700">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
