import { FunctionComponent, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const Tokenomics: FunctionComponent = () => {
  const [number, setNumber] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { number: animatedNumber } = useSpring({
    number: inView ? 20240000000 : 0,
    config: { duration: 2500 },
  });

  return (
    <div
      ref={ref}
      className="w-full h-full overflow-y-auto relative overflow-hidden text-white font-freckle-face px-4 md:px-0"
    >
      
      
      {/* Gradient Overlay */}
      
      <div className="text-4xl md:text-41xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] mt-8 md:ml-[50px] 2xl:ml-[100px] relative z-10">
        TOKENOMICS
      </div>
      <div className="relative z-10 flex flex-col text-lg md:text-20xl [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.5)]">
        <div className="flex flex-col md:flex-row justify-start md:ml-[50px] 2xl:ml-[100px]">
          <div className="flex flex-col items-center md:items-start w-full md:w-auto">
            <div className="">
              <div className="bg-white text-blue-500 text-xl md:text-21xl mt-4 md:mt-12 px-4 py-2 rounded ">
                Token Supply:{" "}
                <animated.span>
                  {animatedNumber.to((n) => Math.floor(n).toLocaleString())}
                </animated.span>{" "}
                Tokens
              </div>
            </div>
            <div className="w-full md:w-[800px] mt-4 md:mt-10">
              <div className="text-base md:text-11xl leading-relaxed md:p-8 md:pl-0">
                In our Tokenomics, 50% of tokens are allocated for liquidity to
                ensure a stable trading environment, while 25% support
                development and marketing to fuel our meme-tastic journey. The
                remaining 25% is reserved for community rewards and incentives,
                ensuring that those who contribute to the hype and hold their
                tokens get their share of the glory!
              </div>
            </div>
          </div>
          <div className="flex justify-center md:justify-start w-full mt-4 md:mt-0">
            <img
              className="w-full md:w-[440px] 2xl:w-[600px] h-auto object-contain md:pr-8"
              alt="Token Distribution Pie Chart"
              src="/pie-chart.webp"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
