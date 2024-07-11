import React, { FunctionComponent } from "react";
import { useInView } from "react-intersection-observer";
import { motion, Variants } from "framer-motion";
import "../global.css";

const zoomVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const hoverVariants: Variants = {
  hover: {
    scale: 1.1,
    rotateZ: 10,
    transition: {
      duration: 0.3,
    },
  },
};

const headMovementVariants: Variants = {
  left: { rotate: -5 },
  right: { rotate: 5 },
};

const Leaderboard: FunctionComponent = () => {
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="w-full h-full overflow-y-auto relative overflow-hidden text-white font-freckle-face px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="flex flex-col items-center md:items-start  mt-4 md:mt-4">
          <h1 className="text-4xl 2x:text-41xl md:text-31xl pr-20 text-shadow-lg text-left mb-4 md:ml-[50px] md:mb-4">
            HOW TO BUY
          </h1>
          <motion.img
            src="/brett-sitting.webp"
            alt="Blue Pepe"
            initial="left"
            animate="right"
            variants={headMovementVariants}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="w-[480px] h-[500px] md:w-[500px] md:h-[500px]  ml-[-60px] md:pr-8 mb-4 md:mb-0 md:ml-0"
          />
        </div>
        <div className="flex flex-col items-center md:items-start md:ml-10 mt-4 md:mt-8">
          <div className="flex flex-col md:flex-row md:space-x-8 mr-12 md:mr-8">
            <motion.div
              ref={ref1}
              initial="hidden"
              animate={inView1 ? "visible" : "hidden"}
              variants={zoomVariants}
              transition={{ duration: 0.5 }}
              whileHover="hover"
              className="flex flex-col bg-blue-700 rounded-2xl w-full md:w-[75%] max-w-[800px] px-6 py-4 mb-6 text-shadow-lg"
            >
              <h2 className="text-xl md:text-[41px] font-bold mb-2 mt-4 md:mt-1">Make Wallet</h2>
              <p className="text-base md:text-[21px] mt-0">
                Download MetaMask or your wallet of choice from the app store or Google Play Store for free. Desktop users can download the Google Chrome extension by going to metamask.io.
              </p>
            </motion.div>

            <motion.div
              ref={ref2}
              initial="hidden"
              animate={inView2 ? "visible" : "hidden"}
              variants={zoomVariants}
              transition={{ duration: 0.5 }}
              whileHover="hover"
              className="flex flex-col bg-blue-700 rounded-2xl w-full md:w-[75%] max-w-[1000px] px-6 py-4 mb-6 text-shadow-lg"
            >
              <h2 className="text-xl md:text-[41px] font-bold mb-2 mt-4 md:mt-1">Get Some ETH</h2>
              <p className="text-base md:text-[25px] mt-0">
                Have ETH in your wallet to switch to $OLYMPIC. If you don't have any ETH, you can buy directly on MetaMask, transfer from another wallet, or buy on another exchange and send it to your wallet.
              </p>
            </motion.div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-8 mr-12 md:mr-8">
            <motion.div
              ref={ref3}
              initial="hidden"
              animate={inView3 ? "visible" : "hidden"}
              variants={zoomVariants}
              transition={{ duration: 0.5 }}
              whileHover="hover"
              className="flex flex-col bg-blue-700 rounded-2xl w-full md:w-[75%] max-w-[800px] px-6 py-4 mb-6 text-shadow-lg"
            >
              <h2 className="text-xl md:text-[41px] font-bold mb-2 mt-4 md:mt-1">Go To Uniswap</h2>
              <p className="text-base md:text-[25px] mt-0 md:mt-[45px]">
                Connect to Uniswap. Go to app.uniswap.org in Google Chrome or on the browser inside your MetaMask app. Connect your wallet. Paste the $OLYMPIC token address into Uniswap, select $OLYMPIC COIN, and confirm. When MetaMask prompts you for a wallet signature, sign.
              </p>
            </motion.div>

            <motion.div
              ref={ref4}
              initial="hidden"
              animate={inView4 ? "visible" : "hidden"}
              variants={zoomVariants}
              transition={{ duration: 0.5 }}
              whileHover="hover"
              className="flex flex-col bg-blue-700 rounded-2xl w-full md:w-[75%] max-w-[800px] px-6 py-4 mb-6 text-shadow-lg"
            >
              <h2 className="text-xl md:text-[41px] font-bold mb-2 mt-4 md:mt-1">Switch ETH for $OLYMPIC</h2>
              <p className="text-base md:text-[25px] mt-0">
                Transitioning from ETH to $OLYMPIC in our Olympics-themed event comes with the benefit of zero taxes, meaning you won't need to be concerned about purchasing with a fixed slippage rate. However, it's advisable to consider using slippage during moments of market turbulence.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
