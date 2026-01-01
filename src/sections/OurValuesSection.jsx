import FlowerCircles from "../components/FlowerCircles";

const items = [
  { label: "Inclusivity", text: "Everyone belongs. Everyone has a voice.", pos: "top", image: "/assets/images/nusis-presentation.png" },
  { label: "Empathy", text: "Everything starts with istening and understanding first.", pos: "left", image: "/assets/images/nuimpact-fund-meeting.png" },
  { label: "Humility", text: "No ego, just growth and improvement.", pos: "right", image: "/assets/images/nuimpact-guy-talking.png" },
  { label: "Community", text: "Great things are built together through collaboration and trust.", pos: "bottomLeft", image: "/assets/images/founding-team-original.png" },
  { label: "Intention", text: "Every desicion is made with thought and purpose.", pos: "bottomRight", image: "/assets/images/nusis-workshop.png" },
];

export default function ValuesSection() {
  return (
    <section className="relative w-full py-20 px-4 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* LEFT CARD - Shifted further left (start of column) */}
        <div className="flex justify-center lg:justify-start w-full">
          <div className="w-full max-w-[450px] bg-[var(--color-nuimpact-dark-blue)] p-2 shadow-2xl h-auto md:h-[600px] flex flex-col">
            <div className="border-4 border-white w-full h-full p-6 md:p-8 flex flex-col items-center text-center gap-4 md:gap-8">
              <h2 className="text-4xl md:text-6xl font-bold text-white underline underline-offset-8 mb-2 md:mb-4">
                Our Values
              </h2>
              <p className="text-white text-xl md:text-3xl leading-relaxed mt-2 md:mt-4 overflow-y-auto max-h-[400px]">
                NUImpact is built on a foundation of inclusivity, empathy, humility, community, and intention. We strive to create a space where everyone feels welcome and valued.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FLOWER - Centered in column to avoid overlap */}
        <div className="flex justify-center lg:justify-center transform w-full md:w-auto md:scale-[0.7] lg:scale-[0.65] origin-center">
          <FlowerCircles values={items} />
        </div>
      </div>
    </section>
  );
}
