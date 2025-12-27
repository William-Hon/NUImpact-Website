import React, { useEffect, useRef } from "react";

const ImageSliderSection = ({
  images,
  mode = "auto",        // "auto" | "manual"
  speed = 0.3,          // auto scroll speed
  step = 300,           // manual scroll step
  height = "h-64",
}) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (mode !== "auto") return;

    const container = scrollRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const tick = () => {
      scrollAmount += speed;
      container.scrollLeft = scrollAmount;

      // infinite loop
      if (scrollAmount >= container.scrollWidth / 2) {
        scrollAmount = 0;
      }
    };

    const id = setInterval(tick, 16);
    return () => clearInterval(id);
  }, [mode, speed]);

  const scrollBy = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir * step,
      behavior: "smooth",
    });
  };

  const renderedImages =
    mode === "auto" ? [...images, ...images] : images;

  return (
    <div className="relative w-full px-3">
      {/* MANUAL CONTROLS */}
      {mode === "manual" && (
        <>
          <button
            onClick={() => scrollBy(-1)}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy(1)}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white px-3 py-2"
          >
            →
          </button>
        </>
      )}

      {/* SCROLLER */}
      <div ref={scrollRef} className="overflow-hidden w-full">
        <div className="flex gap-3">
          {renderedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              className={`${height} flex-shrink-0 object-cover`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSliderSection;
