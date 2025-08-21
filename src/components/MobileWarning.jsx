import React, { useEffect, useState } from "react";

const MobileWarning = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setShow(true);
        // Auto-hide after 5 seconds
        setTimeout(() => setShow(false), 5000);
      } else {
        setIsMobile(false);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile || !show) return null;

  return (
    <div className="fixed bottom-5 right-5 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg z-[1000]">
      ⚠️ For the best experience, please use this app on a desktop.
    </div>
  );
};

export default MobileWarning;
