import { FunctionComponent, useRef } from "react";
import Leaderboard from "./Leaderboard";
import Roadmap from "./Roadmap";
import Tokenomics from "./Tokenomics";
import Social from "./Social";
import About from "./About";
import "../global.css";
import Marquee from "react-fast-marquee";
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useGlitch } from 'react-powerglitch';

const images = [
  '/meme1.webp',
  '/meme2.webp',
  '/meme3.webp',
  '/meme4.webp',
  '/meme5.webp',
  '/meme6.webp',
  '/meme7.webp'
];

const Home: FunctionComponent = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const leaderboardRef = useRef<HTMLDivElement>(null);
  const tokenomicsRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const glitch = useGlitch();
  const buttonStyle = {
    width: "40px",
  // Correct: No space between 'light' and 'blue'
   // Border with 2px width and solid blue color
   // Rounded corners with 8px radius
  margin: '0 100px',
  padding:'5px 10px'
    
    
};
  const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}


  return (
    <div className="w-full h-screen bg-no-repeat bg-fixed bg-left-top bg-cover bg-custom-bg text-white font-freckle-face">
      <header className="flex flex-col md:flex-row justify-evenly items-center p-6 pb-0 bg-opacity-50">
        <div className="header-container">
          <img
            className="header-logo main-logo"
            alt="Main Logo"
            src="/main-logo.webp"
            loading="lazy"
          />
          <span className="header-text md:mb-[55px] md:text-21xl 2xl:ml-2 2xl:mt-4">
            Olympic on <span className="avenir-font">BASE</span>
          </span>
        </div>

        <nav className="hidden lg:flex space-x-14 text-3xl mb-10 2xl:ml-[70px]">
          {["ABOUT", "HOW TO BUY", "TOKENOMICS", "ROADMAP", "SOCIALS"].map(
            (section, idx) => (
              <div
                key={idx}
                className="cursor-pointer border-transparent border-b-2 hover:border-white nav-zoom"
                onClick={() =>
                  scrollToSection(
                    [
                      aboutRef,
                      leaderboardRef,
                      tokenomicsRef,
                      roadmapRef,
                      socialRef,
                    ][idx]
                  )
                }
              >
                {section}
              </div>
            )
          )}
        </nav>
      </header>

      <div className="w-[500px] h-[610px] flex justify-start md:justify-center align-start md:hidden">
        <img
          className="inset-0 w-[500px] h-[610px] mr-[200px] md:mr-0 ml-[-10px] mt-0"
          alt="Background"
          src="/brett-salute.gif"
          loading="lazy"
        />
      </div>

      <div className="glitch-container hidden md:block mt-2 mr-[100px] ml-[100px] 2xl:mr-[250px] 2xl:ml-[200px]">
        <Zoom
          scale={0.8}
          indicators={true} {...properties}
        >
          {images.map((each, index) => (
            <div key={index} className="each-slide">
              <img
                src={each}
                style={{
                  width: "500px",
                  height: "500px",
                  objectFit: "contain",
                  borderRadius: "10px white",
                  margin:'0 300px'
                }}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </Zoom>
      </div>

      <main className="flex flex-col mt-4 space-y-10 2xl:mt-10">
        <div className="marquee-container text-white tracking-widest">
          <Marquee speed={90}>
            {Array(30).fill("$OLYMPIC\u00A0\u00A0\u00A0")}
          </Marquee>
        </div>

        <div ref={aboutRef} className="flex justify-center mt-[20px] section">
          <About />
        </div>

        <div ref={leaderboardRef} className="flex justify-center mt-10 section">
          <Leaderboard />
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          className="height:[10px] section"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="waves">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#3467DB" fillOpacity="0.2" />
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="#3467DB" fillOpacity="0.5" />
            <use xlinkHref="#gentle-wave" x="50" y="6" fill="#3467DB" fillOpacity="0.9" />
          </g>
        </svg>

        <svg
          className="bottomwave section"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
            />
          </defs>
          <g className="waves">
            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#3467DB" fillOpacity="0.2" />
            <use xlinkHref="#gentle-wave" x="50" y="3" fill="#3467DB" fillOpacity="0.5" />
            <use xlinkHref="#gentle-wave" x="50" y="6" fill="#3467DB" fillOpacity="0.9" />
          </g>
        </svg>

        <div ref={tokenomicsRef} className="flex justify-center section">
          <Tokenomics />
        </div>

        <div className="marquee-container1 text-white tracking-widest section">
          <Marquee speed={90}>
            {Array(10).fill(
              <span className="animate-up-down">
                <img
                  className="w-[125px] h-[124px] md:w-[175px] md:h-[174px] object-cover pl-10"
                  alt="Main Logo"
                  src="/main-logo.webp"
                  loading="lazy"
                />
              </span>
            )}
          </Marquee>
        </div>

        <div ref={roadmapRef} className="flex justify-center section">
          <Roadmap />
        </div>

        <div ref={socialRef} className="section">
          <Social />
        </div>
      </main>
    </div>
  );
};

export default Home;
