

const positions = {
    top: "bottom-70 left-1/2 -translate-x-1/2",
    right: "top-[20%] left-75",
    left: "top-[20%] right-75",
    bottomRight: "top-75 left-[48%]",
    bottomLeft: "top-75 right-[48%]",
};

export default function FlowerCircles({ values }) {
    return (
        <div className="relative mx-auto h-[500px] w-[500px]">
            {values.map((values, i) => (
                <div
                    key={i}
                    className={`
                        absolute group
                        h-60 w-60 rounded-full
                        ring-3 ring-white/60
                        overflow-hidden
                        cursor-pointer
                        transition-all duration-300 ease-out
                        hover:scale-125 hover:z-20
                        ${positions[values.pos]}
                    `}
                >
                    {/* IMAGE LAYER */}
                    <img
                        src={values.image}
                        alt={values.label}
                        className="
                        h-full w-full
                        rounded-full
                        object-cover
                        transition-opacity duration-200
                        group-hover:brightness-10
                        "
                    />

                    {/* WHITE HOVER CONTENT */}
                    <div
                        className="
                        absolute inset-0 rounded-full
                        flex items-center justify-center
                        text-center
                        px-6
                        opacity-0
                        transition-opacity duration-200
                        group-hover:opacity-100
                        z-10
                        "
                    >
                        <div>

                            <p className="mt-2 text-sm text-white">
                                {values.text}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* TOP LABEL */}
            <div className="absolute -top-25 left-1/2 -translate-x-1/2 text-center">
                <p className="text-4xl font-medium text-white">
                    Inclusivity
                </p>
            </div>

            {/* LEFT LABEL */}
            <div className="absolute top-[25%] -left-55 text-right">
                <p className="text-4xl font-medium text-white">
                    Empathy
                </p>
            </div>

            {/* RIGHT LABEL */}
            <div className="absolute top-[25%] -right-55 text-left">
                <p className="text-4xl font-medium text-white">
                    Humility
                </p>
            </div>

            {/* BOTTOM LEFT LABEL */}
            <div className="absolute top-[95%] right-[105%] text-center">
                <p className="text-4xl font-medium text-white">
                    Community
                </p>
            </div>

            {/* BOTTOM RIGHT LABEL */}
            <div className="absolute top-[95%] left-[105%] text-center">
                <p className="text-4xl font-medium text-white">
                    Intention
                </p>
            </div>

        </div>
    );
}
