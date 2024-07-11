import { FunctionComponent, useEffect, useRef } from "react";

const About: FunctionComponent = () => {
  const ponkieRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (ponkieRef.current) {
      ponkieRef.current.classList.add("welcome-animate");
    }
  }, []);

  return (
    <div className="px-4 md:px-0">
      <div className="font-bold text-4xl 2xl:text-51xl about-text mt-4 2xl:mt-0 2xl:ml-[50px] md:text-41xl md:ml-[70px]">
        About
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mt-4 md:mt-8">
        <div>
          <img
            className="ponkie-logo w-[300px] h-[350px] md:w-[400px] md:h-[500px] 2xl:w-[450px] 2xl:h-[500px] object-cover"
            alt="Ponkie logo"
            src="/ponkie-showing.webp"
            ref={ponkieRef}
            loading="lazy"
          />
        </div>
        <div className="flex flex-col items-center md:items-start md:ml-6 pt-6 md:pt-0">
          <div className="w-full md:w-[850px] 2xl:w-[1000px] text-xl md:text-11xl about-pg mt-4 md:mt-0 text-center md:text-left">
            Welcome to the ultimate showdown in the world of meme coins—where humor
            meets the blockchain, and digital athletes flex their market caps!
            Assemble your popcorn and prepare for the MemeCoin Mania Olympics 2024!
            Here, top meme coin characters from various blockchains—including Team
            ETH, Team SOL, Team BASE, and Team BNB—compete in a spectacular display
            of agility, strategy, and sheer meme magic. Keep your eyes on the prize;
            the blockchain with the most market cap at the end of the year will
            clinch the coveted title. We measure all the metrics that matter in the
            meme coin universe to see which team vaults to victory. So, buckle up
            for a rollercoaster ride of digital drama and Olympic-sized laughs—it’s
            going to be a block-busting blast! Who will take the crown? Stay tuned,
            place your bets, and may the richest blockchain win!
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
