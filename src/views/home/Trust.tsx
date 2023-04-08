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
    <div className="w-full max-w-[1600px]">
      <h2 className="mt-[20px] text-center text-[58px] text-white">
        Trust is earned
      </h2>
      <div className="flex w-full justify-around bg-secondary-bg pb-[42px] pt-[42px]">
        <div className=" ml-[120px]  flex  flex-col">
          <span className="text-[57px] font-semibold leading-[60px] text-[#00959A]">
            500+
          </span>
          <span className="text-[37px] leading-[47px] text-white">
            customers rated us
          </span>
          <span className="ml-[90px] bg-gradient-to-r from-[#53C2C2] to-[#00945F] bg-clip-text text-[57px] font-semibold leading-[70px] text-transparent">
            Excelent
          </span>
        </div>
        <div className=" relative ml-[40px] w-full ">
          <div className="absolute mt-[20px] flex gap-[25px]">
            {ratings.map((rating, index) => {
              return <RateCard key={index} {...rating} />;
            })}
            <div className="absolute block  h-full w-full bg-fadeToRight laptop:hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trust;
