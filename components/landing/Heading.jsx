const Heading = ({ children, color, align = "text-left", style }) => {
  return (
    <h2
      className={` font-extrabold text-[30px] leading-8 sm:text-[40px] sm:leading-10 lg:text-[60px] lg:leading-[65px]  ${color} ${align} ${style}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
