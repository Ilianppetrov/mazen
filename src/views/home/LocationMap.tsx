import SvgMap from "@/components/svgs/SvgMap";
import { useEffect, useRef, useState } from "react";

function LocationMap() {
  const [showMap, setShowMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          console.log("entry", entry.isIntersecting);

          if (entry.isIntersecting) {
            setShowMap(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current!);
  }, []);

  return (
    <section ref={sectionRef}>
      <h2 className="mb-[50px] mt-[70px] text-center text-6xl text-[#FCFCFC]">
        Our hosting locations
      </h2>
      <div className=" h-[637px] w-[1202px]">{showMap && <SvgMap />}</div>
    </section>
  );
}

export default LocationMap;
