import Info from "@/components/Info";

function Different() {
  return (
    <section className="mt-[67px] w-full  bg-[#00222E]">
      <div className="flex flex-col items-center">
        <h1 className="mt-[28px] text-5xl leading-[60px] text-[#FCFCFC] drop-shadow-large">
          What makes us{" "}
          <span className="bg-gradient-to-r from-[#53C2C2] to-[#00945F] bg-clip-text font-bold text-transparent drop-shadow-large">
            different
          </span>
        </h1>
        <h3 className="px-16 text-center text-2xl text-[#C1C1C1]">
          Reasons why 2500+ people loved being our clients.
        </h3>
      </div>
      <div className="m-auto mt-[65px] flex max-w-5xl flex-col gap-[60px] px-6 text-white">
        <Info label="Cruelty free">
          We are all about giving you a flawless experience. We prioritize our
          clients and we have proven it.{" "}
          <span className="text-white">
            No hidden fees, no scummy practices.
          </span>
        </Info>
        <Info label="Risk free">
          We don’t hold your money hostage, that’s why we offer{" "}
          <span className="text-white">7 day money back guarantee.</span> No
          questions asked, just request it and you will get it.
        </Info>
        <div className=" flex items-center justify-center gap-6 ">
          <div>
            <div className="mb-2 flex-1 flex-shrink-0 whitespace-nowrap text-[38px] leading-[47px] drop-shadow-large">
              Our team
            </div>
            <div className="mb-2 flex-1 flex-shrink-0 whitespace-nowrap text-[38px] leading-[47px] drop-shadow-large">
              is the GOAT
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-[#53C2C2] to-[#00945F]" />
          </div>
          <div className="text-2xl  text-[#C1C1C1]">
            Beside every amazing service stays an amazing team. We share the
            same values as our clients, so we understand your needs.{" "}
            <div className="text-white">We are here to help you!</div>
          </div>
        </div>
      </div>
      <div className=" relative mt-[70px] h-[100px] ">
        <div className=" absolute h-full w-full bg-diagonalGradient"></div>
        <div className="flex h-[74px] w-[104%] translate-x-[-2%] -rotate-3 items-center justify-center gap-[70px] bg-[#00959A]">
          <span className=" relative text-center text-[34px] leading-[34px] text-white drop-shadow-large">
            <div className="absolute left-[-92px] top-[-67px]  flex h-[80px] w-[80px] rotate-45 items-center justify-center rounded-[5px] bg-[#00222E]">
              <div className="absolute  flex  h-[67px]  w-[67px]  items-center justify-center rounded-[5px] bg-[#00959A]">
                <span className="origin-center -rotate-45 text-[47px]  font-extrabold text-white">
                  ?
                </span>
              </div>
              {/* <div className="absolute left-[calc(50%-42px)] top-[-42px] h-[84px] w-[84px] rotate-45 rounded-[5px] bg-white"></div> */}
            </div>
            Do you have any questions?
          </span>
          <div className="flex items-center gap-[52px]">
            <span className="text-[34px] font-extrabold leading-[34px] text-white drop-shadow-large">
              FAQ
            </span>
            <div className="h-[59px] w-[2px] bg-[#074244]"></div>
            <span className="text-[34px] font-extrabold leading-[34px] text-white drop-shadow-large">
              Contant us
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Different;
