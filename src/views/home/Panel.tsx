import Button from "@/components/Button";
import Info from "@/components/Info";
import Spot from "@/components/svgs/Spot";
import SvgMap from "@/components/svgs/SvgMap";
import Image from "next/image";
import LocationMap from "./LocationMap";

function Panel() {
  return (
    <section className="mt-[48px] w-full max-w-6xl">
      <div className="flex flex-col items-center">
        <h1 className=" text-5xl leading-[73px] text-[#FCFCFC] drop-shadow-large">
          Imagine a panel
        </h1>
        <h3 className="px-16 text-center text-3xl text-[#C1C1C1]">
          thats not there to complicate your life.
        </h3>
      </div>
      <div className="mt-[60px] flex ">
        <div className=" mt-[10px] flex w-7/12 flex-col gap-[80px] px-2 text-white">
          <Info label="Easy">
            Our panel is straight forward.{" "}
            <span className="text-white">
              You click a button - it does what it says it would.
            </span>
          </Info>
          <Info label="Reliable">
            Enjoy our{" "}
            <span className="text-white">guaranteed 100% uptime.</span> Lorem
            Ipsum idk what else.
          </Info>
          <Info label="Compatible">
            Be in control everywhere, even{" "}
            <span className="text-white">from the comfort of your phone.</span>
          </Info>
        </div>
        <div className=" relative  w-5/12">
          <div className="absolute top-[-70px]">
            <Spot />
          </div>
          <div className="absolute h-[640px] w-[750px] ">
            <div className="relative">
              <img
                className="w-full"
                src="/laptop.png"
                // width={1240}
                // height={990}
                alt="laptop"
              />
              <div className="absolute  left-[13%] top-[8%] h-[80%] w-[75%] bg-secondary-bg">
                <div className="px-[1%] pt-[5%]">
                  <SvgMap />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[110px] flex w-full flex-col items-center">
        <p className="text-[30px] font-semibold text-white drop-shadow-large">
          Want to see it in action?
        </p>
        <Button>Demo</Button>
      </div>
    </section>
  );
}

export default Panel;
