import Button from "@/components/Button";
import Maze from "@/components/svgs/Maze";

function Guard() {
  return (
    <section className="relative mb-[60px] w-full  bg-secondary-bg ">
      <div className="z-2 relative mx-auto mb-[40px] mt-[20px] flex max-w-[620px] flex-col gap-2">
        <h1 className="text-center text-5xl text-[#FCFCFC] drop-shadow-large">
          Meet the Maze Guard
        </h1>
        <h3 className="px-8 text-center text-2xl text-[#C1C1C1]">
          Our industry leading DDoS defense system.
        </h3>
      </div>
      <div className="relative top-[36px] m-auto max-w-6xl">
        <div className="relative flex  w-full flex-col items-center justify-end overflow-hidden rounded-[5px] bg-[#00959A] pt-[32px]">
          <p className="text-[34px] font-bold leading-[42px] text-[#00222E]">
            Maze Guard is included with every hosting plan.
          </p>
          <p className=" max-w-[70%] text-center text-2xl text-[#FCFCFC]">
            Sit back, relax and let the guard take care of every security issue
            around your server.
          </p>
          <Button className="mb-[16px]">Learn more</Button>
          <div className="absolute right-0">
            <Maze />
          </div>
        </div>
        <div className="absolute left-[calc(50%-54px)] top-[-60px] flex h-[79px] w-[108px] items-center justify-center ">
          <div className="absolute bottom-[-5px] h-[25px] w-[94px]  border-l-[37px] border-r-[37px] border-t-[25px] border-l-transparent border-r-transparent border-t-secondary-bg"></div>

          <svg
            width="65"
            height="79"
            viewBox="0 0 65 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative"
          >
            <path
              d="M1.45046 1.21871C1.00435 0.940179 0.425983 1.26091 0.425981 1.78683L0.425783 58.059C0.425782 58.2897 0.544448 58.5041 0.739879 58.6265L32.0687 78.2602C32.2862 78.3965 32.5625 78.3965 32.78 78.2602L64.1117 58.6265C64.3071 58.5041 64.4258 58.2896 64.4258 58.059V25.0593C64.4258 24.5335 63.8475 24.2127 63.4014 24.4912L32.7395 43.6315C32.5435 43.7538 32.4244 43.9686 32.4244 44.1996V54.3576C32.4244 54.8837 33.0032 55.2044 33.4493 54.9254L50.1678 44.4692C50.6139 44.1902 51.1927 44.5109 51.1927 45.037V52.3061C51.1927 52.5361 51.0747 52.75 50.8801 52.8727L32.8454 64.2403C32.6291 64.3767 32.3539 64.378 32.1363 64.2435L14.291 53.2181C14.0935 53.0961 13.9733 52.8805 13.9733 52.6483V23.9854C13.9733 23.4594 14.5518 23.1387 14.9979 23.4174L32.069 34.0837C32.2864 34.2195 32.5622 34.2194 32.7795 34.0833L64.1116 14.4542C64.3071 14.3317 64.4258 14.1173 64.4258 13.8866V1.44227C64.4258 0.913969 63.8427 0.593644 63.3968 0.876981L32.7804 20.3316C32.5628 20.4699 32.2852 20.471 32.0665 20.3345L1.45046 1.21871Z"
              fill="#FCFCFC"
            />
            <path
              d="M15.43 0.223145C14.7573 0.223145 14.5044 1.10376 15.0746 1.46064L32.0703 12.0978C32.2877 12.2339 32.5636 12.2339 32.781 12.0978L49.7767 1.46064C50.3469 1.10376 50.094 0.223145 49.4214 0.223145L15.43 0.223145Z"
              fill="#FCFCFC"
            />
          </svg>
          {/* <div className="absolute left-[calc(50%-42px)] top-[-42px] h-[84px] w-[84px] rotate-45 rounded-[5px] bg-white"></div> */}
        </div>
      </div>
    </section>
  );
}

export default Guard;
