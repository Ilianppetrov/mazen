function Button({
  children,
  className = "",
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={`mb-[15px] mt-[18px] rounded-[5px] bg-[#FCFCFC] px-[38px] py-[5px] text-[28px] font-semibold leading-[34px] text-[#001A1B] ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
