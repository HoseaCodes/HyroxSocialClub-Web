const Paragraph = ({ children, color, align = "text-left", style }) => {
  return (
    <p
      className={`font-normal text-[13px] sm:text-base ${color} ${align} ${style}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
