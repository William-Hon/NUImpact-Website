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
      <div className="relative w-full max-w-[90vw] h-[80vh] overflow-hidden shadow-2xl">
        {/* INSET WHITE BORDER FRAME */}
        <div className="absolute inset-2 z-20 pointer-events-none border-4 border-white" />

        {/* image inside card */}
        <img
          src={slides[index].image}
          alt=""
          className="w-full h-full object-cover"
        />

        {/* TRUE BLUR GRADIENT PANEL */}
        <div
          className="absolute inset-y-0 left-0 w-[75%] z-10 pointer-events-none bg-black/75"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, black 60%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, black 0%, black 60%, transparent 100%)",
          }}
        />


        {/* TEXT */}
        <div className="absolute inset-y-0 left-10 w-[45%] z-20 p-10 text-white flex">
          <div className="max-h-full overflow-y-auto pr-4">
            <h1 className="text-6xl font-bold">
              {slides[index].year}
            </h1>

            <h2 className="text-3xl mt-1 font-semibold">
              {slides[index].heading}
            </h2>

            <h3 className="mt-7 max-w-md text-2xl leading-relaxed font-light">
              {slides[index].description}
            </h3>
          </div>
        </div>



        {index === 0 && (
          <button
            onClick={next}
            className="
                absolute right-6 top-1/2 -translate-y-1/2
                text-white text-2xl font-bold
                hover:translate-x-1
                z-20 text-[80px]
              "
          >
            ❱
          </button>
        )}


        {index === last && (
          <button
            onClick={prev}
            className="
                absolute left-4 top-1/2 -translate-y-1/2
                text-white text-lg font-medium
                hover:-translate-x-1
                z-20 text-[80px]
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
                absolute left-4 top-1/2 -translate-y-1/2
                text-white text-lg font-medium
                hover:-translate-x-1
                z-20 text-[80px]
              "
            >
              ❰
            </button>

            <button
              onClick={next}
              className="
                absolute right-4 top-1/2 -translate-y-1/2
                text-white text-lg font-medium
                hover:translate-x-1
                z-20 text-[80px]
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
