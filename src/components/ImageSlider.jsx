import React, { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ImageSliderSection = ({
  images,       // Array of strings (backward compatibility)
  items,        // Array of objects { image, title, description, buttonText, buttonLink }
  mode = "auto",        // "auto" | "manual"
  speed = 0.3,          // auto scroll speed
  step = 300,           // manual scroll step
  height = "h-64",
  gap = "gap-0",        // Customizable gap (default: no gap)
  textColor = "text-white",
  objectFit = "object-cover"
}) => {
  const scrollRef = useRef(null);
  const firstImageRef = useRef(null);
  const [imageHeight, setImageHeight] = useState(0);

  // Normalize data: use items if provided, otherwise convert images to item format
  const sliderItems = items || (images ? images.map(src => ({ image: src })) : []);

  useEffect(() => {
    const updateHeight = () => {
      if (firstImageRef.current) {
        setImageHeight(firstImageRef.current.offsetHeight);
      }
    };

    // Initial measurement
    setTimeout(updateHeight, 100);

    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, [sliderItems]);

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

  const renderedItems =
    mode === "auto" ? [...sliderItems, ...sliderItems] : sliderItems;

  return (
    <div className="relative w-full ">
      {/* Container for everything to manage positioning */}
      <div className="relative">
        {/* MANUAL CONTROLS - Positioned relative to the image area */}
        {mode === "manual" && imageHeight > 0 && (
          <div
            className="absolute left-0 w-full z-20 pointer-events-none flex items-center"
            style={{ top: imageHeight / 2, transform: 'translateY(-50%)' }}
          >
            <div className="relative w-full flex justify-between items-center">
              <button
                onClick={() => scrollBy(-1)}
                className="pointer-events-auto bg-black/40 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/60 transition-all border border-white/20 shadow-xl ml-[-50px] md:ml-[-64px]"
                aria-label="Previous slide"
              >
                <FiChevronLeft size={28} />
              </button>
              <button
                onClick={() => scrollBy(1)}
                className="pointer-events-auto bg-black/40 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/60 transition-all border border-white/20 shadow-xl mr-[-50px] md:mr-[-64px]"
                aria-label="Next slide"
              >
                <FiChevronRight size={28} />
              </button>
            </div>
          </div>
        )}

        {/* SCROLLER */}
        <div ref={scrollRef} className="overflow-hidden w-full">
          <div className={`flex ${gap}`}>
            {renderedItems.map((item, i) => (
              <div key={i} className={`flex-shrink-0 flex flex-col ${item.title ? 'w-[300px] md:w-[450px]' : ''}`}>
                {/* Image Container */}
                <img
                  ref={i === 0 ? firstImageRef : null}
                  src={item.image}
                  className={`${height} w-full ${objectFit}`}
                  alt={item.title || ""}
                />

                {/* Optional Content Underneath */}
                {(item.title || item.description || item.buttonText) && (
                  <div className={`mt-6 space-y-3 ${textColor} text-center`}>
                    {item.title && (
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-tight">
                        {item.title}
                      </h3>
                    )}
                    {item.description && (
                      <p className="text-sm md:text-base opacity-85 font-light leading-relaxed line-clamp-3">
                        {item.description}
                      </p>
                    )}
                    {item.buttonText && (
                      <div className="pt-2 flex justify-center">
                        <a
                          href={item.buttonLink || "#"}
                          className="inline-block px-6 py-2 rounded-full border-2 border-current font-bold hover:bg-white hover:text-black transition-all duration-300 text-sm"
                        >
                          {item.buttonText}
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSliderSection;
