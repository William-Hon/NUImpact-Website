import React, { useState } from "react";

const ImageCarouselSection = ({ slides }) => {
  const [index, setIndex] = useState(0);
  const last = slides.length - 1;

  const prev = () => {
    setIndex((i) => Math.max(i - 1, 0));
  };

  const next = () => {
    setIndex((i) => Math.min(i + 1, last));
  };

  return (
    <div className="relative w-full h-full flex px-10 py-15 items-center justify-center">
      {/* CARD */}
      <div className="relative w-full max-w-[95vw] md:max-w-[90vw] h-[55vh] md:h-[80vh] overflow-hidden shadow-2xl rounded-2xl md:rounded-none">
        {/* INSET WHITE BORDER FRAME */}
        <div className="absolute inset-2 md:inset-4 z-20 pointer-events-none border-2 md:border-4 border-white rounded-xl md:rounded-none" />

        {/* image inside card */}
        <img
          src={slides[index].image}
          alt=""
          className={`w-full h-full object-cover ${slides[index].imagePosition || "object-center"}`}
        />

        {/* TRUE BLUR GRADIENT PANEL */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[80%] z-10 pointer-events-none bg-black/60 md:bg-black/75"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, black 0%, black 50%, transparent 100%)",
          }}
        />


        {/* TEXT */}
        <div className="absolute inset-y-0 left-0 md:left-10 w-full md:w-[50%] z-20 p-6 md:p-10 text-white flex items-center md:block">
          <div className="max-h-full overflow-y-auto pr-2 md:pr-4 pt-4 pb-16 md:pt-0 md:pb-0 custom-scrollbar">
            <h1 className="text-4xl md:text-5xl font-bold">
              {slides[index].year}
            </h1>

            <h2 className="text-xl md:text-2xl mt-1 font-semibold">
              {slides[index].heading}
            </h2>

            <h3 className="mt-3 md:mt-5 max-w-md text-sm md:text-lg leading-relaxed font-light">
              {slides[index].description}
            </h3>
          </div>
        </div>



        {index === 0 && (
          <button
            onClick={next}
            className="
                absolute right-6 bottom-4 md:bottom-auto md:right-10 md:top-1/2 md:-translate-y-1/2
                text-white text-3xl md:text-[50px] font-bold
                hover:translate-x-1
                z-30
              "
          >
            ❱
          </button>
        )}


        {index === last && (
          <button
            onClick={prev}
            className="
                absolute left-6 bottom-4 md:bottom-auto md:left-10 md:top-1/2 md:-translate-y-1/2
                text-white text-3xl md:text-[50px] font-medium
                hover:-translate-x-1
                z-30
              "
          >
            ❰
          </button>
        )}

        {index > 0 && index < last && (
          <>
            <button
              onClick={prev}
              className="
                absolute left-6 bottom-4 md:bottom-auto md:left-10 md:top-1/2 md:-translate-y-1/2
                text-white text-3xl md:text-[50px] font-medium
                hover:-translate-x-1
                z-30
              "
            >
              ❰
            </button>

            <button
              onClick={next}
              className="
                absolute right-6 bottom-4 md:bottom-auto md:right-10 md:top-1/2 md:-translate-y-1/2
                text-white text-3xl md:text-[50px] font-medium
                hover:translate-x-1
                z-30
              "
            >
              ❱
            </button>
          </>
        )}


      </div>

    </div>
  );
};

export default ImageCarouselSection;
