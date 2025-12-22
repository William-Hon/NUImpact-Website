import React from "react";
import { useEffect, useRef } from "react";

const ImageScroll = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 0.3;
      container.scrollLeft = scrollAmount;

      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 16);

    return () => clearInterval(interval);
  }, []);

  const images = [
    "/assets/images/nusis-group.png",
    "/assets/images/nuimpact-team-alt.png",
    "/assets/images/nuimpact-nusis-full-group.png",
    "/assets/images/nuimpact-guy-talking.png"
  ];

  return (
    <div ref={scrollRef} className="w-full overflow-hidden">
      <div className="flex gap-3">
        {[...images, ...images].map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-64 flex-shrink-0 object-cover"
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default ImageScroll;
