function Info({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className=" flex items-center justify-center gap-6 ">
      <div>
        <div className="mb-2 flex-1 flex-shrink-0 whitespace-nowrap text-[38px] leading-[47px] drop-shadow-large">
          {label}
        </div>
        <div className="h-1 w-full bg-gradient-to-r from-[#53C2C2] to-[#00945F]" />
      </div>
      <div className="text-2xl text-[#C1C1C1]">{children}</div>
    </div>
  );
}

export default Info;
