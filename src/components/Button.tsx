function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="mb-[15px] mt-[18px] rounded-[5px] bg-[#FCFCFC] px-[42px] py-[5px] text-[34px] font-semibold text-[#001A1B]">
      {children}
    </button>
  );
}

export default Button;
