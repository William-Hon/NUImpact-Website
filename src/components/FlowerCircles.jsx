import React, { useState } from 'react';


const positions = {
    top: "bottom-70 left-1/2 -translate-x-1/2",
    right: "top-[20%] left-75",
    left: "top-[20%] right-75",
    bottomRight: "top-75 left-[48%]",
    bottomLeft: "top-75 right-[48%]",
};

export default function FlowerCircles({ values }) {
    const [activeindex, setActiveIndex] = useState(null);

    const handleCircleClick = (index) => {
        if (activeindex === index) {
            setActiveIndex(null); // Close if clicking same
        } else {
            setActiveIndex(index); // Open new
        }
    };

    return (
        <div className="w-full">
            {/* MOBILE LIST LAYOUT */}
            <div className="flex flex-col gap-6 md:hidden px-2 w-full">
                {values.map((item, i) => (
                    <div key={i} className="flex items-center gap-5 bg-white/60 p-4 rounded-2xl shadow-md border-2 border-white w-full">
                        {/* Circle Image */}
                        <div className="shrink-0">
                            <img
                                src={item.image}
                                alt={item.label}
                                className="h-28 w-28 rounded-full object-cover ring-4 ring-[var(--color-nuimpact-dark-blue)] shadow-md"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex flex-col w-full min-w-0">
                            <h3 className="text-2xl font-bold text-[var(--color-nuimpact-dark-blue)] truncate">
                                {item.label}
                            </h3>
                            <p className="text-base font-medium text-gray-900 leading-snug mt-1 break-words">
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* DESKTOP FLOWER LAYOUT */}
            <div className="hidden md:block relative mx-auto h-[500px] w-[500px]">
                {values.map((values, i) => (
                    <div
                        key={i}
                        onClick={() => handleCircleClick(i)}
                        className={`
                        absolute group
                        h-60 w-60 rounded-full
                        ring-3 ring-[var(--color-nuimpact-dark-blue)]
                        overflow-hidden
                        cursor-pointer
                        transition-all duration-300 ease-out
                        hover:scale-125 hover:z-20
                        ${positions[values.pos]}
                        ${activeindex === i ? 'scale-125 z-20' : ''}
                    `}
                    >
                        {/* IMAGE LAYER */}
                        <img
                            src={values.image}
                            alt={values.label}
                            className={`
                        h-full w-full
                        rounded-full
                        object-cover
                        transition-opacity duration-200
                        group-hover:brightness-10
                        ${activeindex === i ? 'brightness-10' : ''}
                        `}
                        />

                        {/* WHITE HOVER CONTENT */}
                        <div
                            className={`
                        absolute inset-0 rounded-full
                        flex items-center justify-center
                        text-center
                        px-6
                        transition-opacity duration-200
                        z-10
                        ${activeindex === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
                        `}
                        >
                            <div>
                                <p className="mt-2 text-md font-semibold text-white">
                                    {values.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}

                {/* TOP LABEL */}
                <div className="absolute -top-25 left-1/2 -translate-x-1/2 text-center">
                    <p className="text-4xl font-bold text-[var(--color-nuimpact-dark-blue)]">
                        Inclusivity
                    </p>
                </div>

                {/* LEFT LABEL */}
                <div className="absolute top-[25%] -left-55 text-right">
                    <p className="text-4xl font-bold text-[var(--color-nuimpact-dark-blue)]">
                        Empathy
                    </p>
                </div>

                {/* RIGHT LABEL */}
                <div className="absolute top-[25%] -right-55 text-left">
                    <p className="text-4xl font-bold text-[var(--color-nuimpact-dark-blue)]">
                        Humility
                    </p>
                </div>

                {/* BOTTOM LEFT LABEL */}
                <div className="absolute top-[95%] right-[105%] text-center">
                    <p className="text-4xl font-bold text-[var(--color-nuimpact-dark-blue)]">
                        Community
                    </p>
                </div>

                {/* BOTTOM RIGHT LABEL */}
                <div className="absolute top-[95%] left-[105%] text-center">
                    <p className="text-4xl font-bold text-[var(--color-nuimpact-dark-blue)]">
                        Intention
                    </p>
                </div>
            </div>
        </div>
    );
}
