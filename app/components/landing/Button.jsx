// const Button = ({
//   children,
//   bgcolor = "bg-[#3b82f6] ",
//   color = "text-white",
// }) => {
//   return (
//     <div
//       className={`w-[180px] sm:w-[250px] text-center py-3 rounded-2xl text-[13px] sm:text-base  font-bold cursor-pointer ${bgcolor} ${color}`}
//     >
//       {children}
//     </div>
//   );
// };

// export default Button;

const Button = ({ children, onClick, bgcolor = "bg-blue-600", color = "text-white", className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-3 rounded-full ${bgcolor} ${color} hover:opacity-90 transition duration-300 font-medium w-fit ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;