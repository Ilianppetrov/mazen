import Info from "@/components/Info";

function Different() {
  return (
    <section className="mt-[83px] w-full max-w-[1600px] bg-[#00222E]">
      <div className="flex flex-col items-center">
        <h1 className="mt-[36px] text-6xl leading-[73px] text-[#FCFCFC]">
          What makes us{" "}
          <span className="bg-gradient-to-r from-[#53C2C2] to-[#00945F] bg-clip-text text-transparent">
            different
          </span>
        </h1>
        <h3 className="px-16 text-center text-3xl text-[#C1C1C1]">
          Software, hardware, safety, simplicity, we’ve got it all.
        </h3>
      </div>
      <div className="m-auto mt-[65px] flex max-w-7xl flex-col gap-[80px] px-6 text-white">
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
            <div className="mb-2 flex-1 flex-shrink-0 whitespace-nowrap text-[47px] leading-[59px]">
              Our team
            </div>
            <div className="mb-2 flex-1 flex-shrink-0 whitespace-nowrap text-[47px] leading-[59px]">
              is the GOAT
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-[#53C2C2] to-[#00945F]" />
          </div>
          <div className="text-[30px] leading-[38px] text-[#C1C1C1]">
            Beside every amazing service stays an amazing team. We share the
            same values as our clients, so we understand your needs.{" "}
            <div className="text-white">We are here to help you!</div>
          </div>
        </div>
      </div>
      <div className=" relative mt-[94px] h-[125px] ">
        <div className=" absolute h-full w-full bg-diagonalGradient"></div>
        <div className="flex h-[94px] w-[104%] translate-x-[-2%] -rotate-3 items-center justify-center gap-[87px] bg-[#00959A]">
          <span className=" text-center text-[44px] leading-[44px] text-white">
            Do you have any questions?
          </span>
          <div className="flex items-center gap-8">
            <span className="text-[47px] font-extrabold text-white">FAQ</span>
            <div className="h-[73px] w-[2px] bg-[#074244]"></div>
            <span className="text-[47px] font-extrabold text-white">
              Contant us
            </span>
          </div>
          <div className="absolute left-[10%] top-[-58px] flex h-[100px] w-[100px] rotate-45 items-center justify-center rounded-[5px] bg-[#00222E]">
            <div className="absolute  flex h-[84px]  w-[84px]  items-center justify-center rounded-[5px] bg-[#00959A]">
              <span className="origin-center -rotate-45 text-[58px]  font-extrabold text-white">
                ?
              </span>
            </div>
            {/* <div className="absolute left-[calc(50%-42px)] top-[-42px] h-[84px] w-[84px] rotate-45 rounded-[5px] bg-white"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Different;
