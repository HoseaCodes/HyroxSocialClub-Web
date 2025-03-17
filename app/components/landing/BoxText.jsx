const BoxText = ({
  children,
  color = "text-black",
  align = "text-left",
  style,
}) => {
  return (
    <h6
      className={`font-light text-base text-center  border-[0.7px] border-[#9F9F9F] rounded-lg px-3 py-[6px] max-w-[137px] ${color} ${align} ${style}`}
    >
      {children}
    </h6>
  );
};

export default BoxText;
