import Button from "@/components/Button";

function Banner() {
  return (
    <section className="relative w-full max-w-7xl">
      <div className="relative flex h-[250px] w-full flex-col items-center justify-end rounded-[5px] bg-gradient-to-r from-[#53C2C2] to-[#00945F]">
        <p className="text-[42px] font-bold leading-[53px] text-[#00222E]">
          Minecraft hosting is now active.
        </p>
        <p className="text-[30px] leading-[37px] text-[#FCFCFC]">
          Try it risk-free, with prices starting at <b>3.49$</b>
        </p>
        <Button>Start</Button>
        <img
          src="/wizard.png"
          alt="wizard"
          className="absolute right-[-40px]"
        />
      </div>
      <div className="absolute left-[calc(50%-54px)] top-[-54px] flex h-[108px] w-[108px] rotate-45 items-center justify-center rounded-[5px] bg-[#00222E]">
        <div className="absolute  flex h-[84px]  w-[84px]  items-center justify-center rounded-[5px] bg-white">
          <span className="origin-center -rotate-45 text-[27px]  font-extrabold">
            NEW
          </span>
        </div>
        {/* <div className="absolute left-[calc(50%-42px)] top-[-42px] h-[84px] w-[84px] rotate-45 rounded-[5px] bg-white"></div> */}
      </div>
    </section>
  );
}

export default Banner;
