import React, { useEffect, useRef } from "react";
import { TypewriterEffect } from "./ui/typewrite-effect";

const Social = () => {
  const pepeRef = useRef(null);
  const words = [
    {
      text: "Powered",
    },
    {
      text: "by",
    },
    {
      text: "Base.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const handleClickEmail = () => {
    window.location.href = "mailto:olympiconbase@gmail.com";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-zoomIn");
          }
        });
      },
      { threshold: 0.5 }
    );

    if (pepeRef.current) {
      observer.observe(pepeRef.current);
    }

    return () => {
      if (pepeRef.current) {
        observer.unobserve(pepeRef.current);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center text-center md:flex-row md:text-21xl md:mr-20">
        <div className="relative">
          <img
            alt="base"
            loading="lazy"
            width="600"
            height="600"
            decoding="async"
            className="ml-2 md:mt-3 opacity-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px]"
            src="/pepe-running1.webp"
            ref={pepeRef}
          />
        </div>
        <div className="flex flex-col md:flex-col items-center mb-[5px] 2xl:mr-20 text-[50px] md:text-11xl mt-4 md:mt-0">
          <TypewriterEffect words={words} className="mt-4 md:mt-0" />
          <img
            alt="base"
            loading="lazy"
            width="50"
            height="50"
            decoding="async"
            className="ml-2 mt-4 md:mt-2 pacman-animation"
            src="/base-logo.svg"
          />
        </div>
        <div className="flex flex-col items-center text-4xl md:text-6xl md:ml-7 p-10 pt-0">
          <div className="text-center mt-4 border-black-100 border-radius-2 lg:text-4xl mb-6">
            SOCIALS
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div>
              <button
                type="button"
                className="w-[300px] md:w-64 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 flex items-center"
              >
                <a
                  href="https://x.com/Olympic_Base"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-start text-white no-underline w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12 mr-2"
                  >
                    <path d="M24 4.557a9.94 9.94 0 0 1-2.828.775A4.916 4.916 0 0 0 23.337 3c-.957.568-2.015.982-3.14 1.204A4.924 4.924 0 0 0 16.616 3c-2.7 0-4.884 2.184-4.884 4.884 0 .38.043.752.126 1.107A13.968 13.968 0 0 1 1.671 3.15a4.822 4.822 0 0 0-.661 2.456c0 1.695.862 3.192 2.173 4.07a4.924 4.924 0 0 1-2.21-.609v.06c0 2.368 1.684 4.343 3.917 4.79a4.92 4.92 0 0 1-2.204.084 4.926 4.926 0 0 0 4.604 3.418A9.873 9.873 0 0 1 0 20.59a13.911 13.911 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.985 0-.214-.004-.425-.014-.637A9.936 9.936 0 0 0 24 4.557z" />
                  </svg>
                  <div className="font-freckle-face text-lg">TWITTER</div>
                </a>
              </button>
            </div>
          </div>
          <div>
            <button
              type="button"
              className="w-[300px] md:w-64 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 flex items-center"
            >
              <a
                href="https://t.me/olympiconbase"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start text-white no-underline w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 mr-2"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.333 8.455l-1.157 5.418c-.082.366-.297.457-.604.284l-1.664-1.225-0.802.772c-.15.151-.276.276-.561.276l.201-2.818 5.127-4.658c.224-.201.05-.312-.153-.111L8.916 12.67l-2.809-.878c-.305-.094-.312-.297.063-.439l10.987-4.24c.289-.104.539.066.439.342z" />
                </svg>
                <div className="font-freckle-face text-lg">TELEGRAM</div>
              </a>
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleClickEmail}
              className="w-[300px] md:w-64 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 flex items-center"
            >
              <div className="flex items-center justify-start text-white no-underline w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-12 h-12 mr-2"
                >
                  <path d="M12 12.713l11.985-7.927a.998.998 0 0 0-.234-1.786H.249a.998.998 0 0 0-.236 1.786L12 12.713zm0 2.928L.161 7.4V20.35c0 .55.446.998.998.998h21.683a.998.998 0 0 0 .998-.998V7.4L12 15.641z" />
                </svg>
                <div className="font-freckle-face text-lg">EMAIL</div>
              </div>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-[300px] md:w-64 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 flex items-center"
            >
              <a
                href="https://dexscreener.com/Olympic_Base"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-start text-white no-underline w-full"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full mr-2">
                  <img
                    src="/dextools.svg"
                    alt="DEXScreener"
                    className="w-12 h-12"
                  />
                </div>
                <div className="font-freckle-face text-lg">DEXSCREENER</div>
              </a>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="elementor-heading-title elementor-size-default ml-5 text-center">
          © 2024 OLYMPIC ON BASE - All rights reserved.
        </h2>
      </div>
    </div>
  );
};

export default Social;
