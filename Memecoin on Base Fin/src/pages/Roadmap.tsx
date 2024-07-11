import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaMapMarkerAlt} from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";
import { GoTriangleLeft } from "react-icons/go";


gsap.registerPlugin(ScrollTrigger);

const Roadmap: FunctionComponent = () => {
  const roadmapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [markerPositions, setMarkerPositions] = useState<number[]>([]);

  useEffect(() => {
    const roadmapElement = roadmapRef.current;

    if (!roadmapElement) return;

    const sections = roadmapElement.querySelectorAll<HTMLDivElement>(".roadmap-section");
    const totalSections = sections.length;
    const positions: number[] = [];

    sections.forEach((section, index) => {
      const sectionProgress = ((index + 1) / totalSections) * 100;
      const markerPosition = section.offsetTop + section.clientHeight / 2;
      positions.push(markerPosition);

      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          setProgress(sectionProgress);
          animateMarker(index); // Trigger marker animation
        },
        onEnterBack: () => {
          setProgress(sectionProgress);
          animateMarker(index); // Trigger marker animation
        },
      });

      gsap.fromTo(
        section,
        {
          x: index % 2 === 0 ? "-100%" : "100%", // Start from the left or right based on the index
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: section,
            start: "top 80%", // Trigger the animation when the top of the section hits 80% of the viewport height
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    setMarkerPositions(positions);
  }, []);

  const animateMarker = (index: number) => {
    const tl = gsap.timeline();
    tl.to(`.location-marker-${index}`, {
      scale: 1,
      duration: 0.5,
      ease: "bounce.out",
    })
      .to(`.location-marker-${index}`, {
        y: -20,
        duration: 0.3,
        ease: "power2.out",
      })
      .to(`.location-marker-${index}`, {
        y: 0,
        duration: 0.3,
        ease: "bounce.out",
      })
      .to(`.location-marker-${index}`, {
        y: -10,
        duration: 0.2,
        ease: "power2.out",
      })
      .to(`.location-marker-${index}`, {
        y: 0,
        duration: 0.2,
        ease: "bounce.out",
      });
  };

  return (
    <div className="w-full h-full overflow-y-auto relative overflow-hidden text-white font-freckle-face">
      <div className="text-31xl text-snow-100 ml-[100px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)] lg:mt-2">
        RoadMap
      </div>
      <div
        className="relative mt-10 flex flex-col items-center space-y-8 lg:space-y-8"
        ref={roadmapRef}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hidden md:block w-1 h-full relative">
            <div
              style={{
                position: "absolute",
                top: 0,
                height: `${progress}%`,
                width: "100%",
                backgroundColor: progress === 100 ? "#0096FF" : "#0096FF",
                transition: "height 0.2s ease-in-out",
              }}
            ></div>
            {markerPositions.map((pos, index) => (
              <div
                key={index}
                className={`location-marker-${index} absolute text-blue-500 text-3xl`}
                style={{
                  top: `${pos}px`,
                  left: "calc(50% - 32px)",
                  transform: "translateX(-32px)",
                  scale: 0,
                  zIndex: 10,
                }}
              >
                <div className="marker-container relative flex items-center justify-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-4 border-blue-500">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <FaMapMarkerAlt className="text-black text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {[
          {
            title: "Q1 2024: Launch and Team Formation",
            details: [
              "Official launch of the meme coin and unveiling of the Olympic-themed project.",
              "Formation of teams: Team ETH, Team SOL, Team BASE, and Team BNB.",
              "Release initial character designs and backstory.",
            ],
          },
          {
            title: "Q2 2024: Community Engagement and Partnerships",
            details: [
              "Launch community contests and interactive events to boost engagement.",
              "Form partnerships with popular platforms and influencers in the crypto space.",
              "Start of preliminary rounds and challenges among teams.",
            ],
          },
          {
            title: "Q3 2024: MemeCoin Olympics Main Events",
            details: [
              "Begin main competition events, streamed live with real-time community interaction.",
              "Implement voting mechanisms for the community to influence event outcomes.",
              "Track team performances and update leaderboards weekly.",
            ],
          },
          {
            title: "Q4 2025: Grand Finale and Token Rewards",
            details: [
              "Host the grand finale event with massive community participation.",
              "Declare the winning blockchain based on the highest market cap increase.",
              "Distribute rewards and special edition tokens to participants and top holders.",
            ],
          },
        ].map((event, index) => (
          <div
            key={index}
            className={`roadmap-section shadow-[0px_4px_4px_rgba(0,_0,_0,_0.6)] rounded-2xl bg-blue-700 w-[85%]  2xl:w-[70%] md:w-[40%] max-w-[600px] md:max-w-[500px] 2xl:max-w-[600px] 2xl:h-auto p-4 border border-orange-500 relative ${
              index % 2 === 0 ? " md:mr-[720px] 2xl:mr-[800px]" : "md:ml-[720px] 2xl:ml-[800px]"
            }`}
          >
            <img
              src="/roadmap-logo.webp"
              alt="Blue Pepe"
              className="w-[100%] h-[180px] md:w-[100%] md:h-[250px] rounded-xl"
            />
            <h2 className="text-11xl mb-2">{event.title}</h2>
            <ul className="text-xl">
              {event.details.map((detail, i) => (
                <li key={i} className="mb-2">
                  {detail}
                </li>
              ))}
            </ul>
            <div
              className={`absolute top-1/2 transform -translate-y-1/2 ${
                index % 2 === 0 ? "right-[-20px]" : "left-[-20px]"
              } w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${
                index % 2 === 0
                  ? "border-l-[20px] border-l-orange-500"
                  : "border-r-[20px] border-r-orange-500"
              }`}
              style={{ zIndex: 5 }}
            ></div>
            {index % 2 === 0 ? (
              <GoTriangleRight className="hidden md:block absolute top-1/2 md:mt-[23px] 2xl:mt-[25px] transform -translate-y-1/2 right-[-40px] text-blue-500 text-[60px] z-10" />
            ) : (
              <GoTriangleLeft className="hidden md:block absolute top-1/2 mt-[21px] 2xl:mt-[25px] transform -translate-y-1/2 left-[-40px] text-blue-500 text-[60px] z-10" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
