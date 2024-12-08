import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import heroVideo from "../assets/images/hero.mp4";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Play the video programmatically
    if (videoRef.current) {
      videoRef.current.play();
    }

    // Set a timer to hide the video after 36 seconds
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide the video after 36 seconds
    }, 36000); // 36000 milliseconds = 36 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);
  const heroHeading = " Unleashing the Power of Code".split(" ");
  const heroSubHeading =
    " Just as Kratos forged his destiny, I forge experiences through code.Explore my journey into the world of development.";

  return (
    <div className="h-[80vh] bg-black flex justify-center items-center flex-col gap-6">
      {/* Use motion for smooth transition when video is hidden */}
      {isVisible && (
        <motion.video
          ref={videoRef} // Attach ref to the video element
          loop
          muted
          className="w-full h-full object-cover"
          initial={{ opacity: 1 }}
          animate={{ opacity: isVisible ? 1 : 0 }} // Smooth fade-out
          transition={{ duration: 3 }} // Transition duration for fade-out
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      )}

      {!isVisible && (
        <div>
          {heroHeading.map((text, index) => {
            return (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 10,
                  delay: (index * 10) / 10,
                }}
                className="text-8xl"
                key={index}
              >
                {text}{" "}
              </motion.span>
            );
          })}

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 5, ease: "linear" }}
            className="text-2xl"
          >
            Just as Kratos forged his destiny, I forge experiences through code.
            Explore my journey into the world of development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 5, ease: "linear" }}
            className="flex justify-center mt-2"
          >
            <p>Scroll Down</p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Hero;
