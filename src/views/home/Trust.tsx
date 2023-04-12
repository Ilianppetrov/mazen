import RateCard from "@/components/RateCard";

const ratings = [
  {
    name: "Ivan G.",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
  },
  {
    name: "Ivan G.",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
  },
  {
    name: "Ivan G.",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt u",
  },
];

function Trust() {
  return (
    <div className="w-full ">
      <h2 className="mt-[17px] text-center text-5xl text-white drop-shadow-large">
        Trust is earned
      </h2>
      <div className=" mt-[6px] w-full  bg-secondary-bg">
        <div className="m-auto flex w-full max-w-6xl justify-around  pb-[35px] pt-[35px]">
          <div className=" ml-[105px]  flex  flex-col drop-shadow-large">
            <span className="text-[46px] font-semibold leading-[57px] text-[#00959A]">
              500+
            </span>
            <span className="text-[30px] leading-[38px] text-white">
              customers rated us
            </span>
            <span className="ml-[90px] bg-gradient-to-r from-[#53C2C2] to-[#00945F] bg-clip-text text-[46px] font-semibold leading-[57px] text-transparent">
              Excelent
            </span>
          </div>
          <div className=" relative ml-[30px] w-full ">
            <div className="absolute mt-[15px] flex gap-[21px]">
              {ratings.map((rating, index) => {
                return <RateCard key={index} {...rating} />;
              })}
              <div className="absolute block  h-full w-full bg-fadeToRight laptop:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
