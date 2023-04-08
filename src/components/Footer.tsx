import Logo from "./svgs/Logo";

function Footer() {
  return (
    <div className="mt-[300px] flex w-full flex-col items-center">
      <Logo />
      <div className="text-[24px]">
        <span className="font-semibold text-white ">Copyright </span>
        <span className="text-[#C1C1C1]">
          Lorem Ipsum is just a dummy text.
        </span>
      </div>
    </div>
  );
}

export default Footer;
