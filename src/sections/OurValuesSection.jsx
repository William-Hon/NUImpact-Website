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
        <div className="flex justify-center lg:justify-start">
          <div className="w-[450px] bg-[var(--color-nuimpact-dark-blue)] p-2 shadow-2xl h-[600px] flex flex-col">
            <div className="border-4 border-white w-full h-full p-8 flex flex-col items-center text-center gap-8">
              <h2 className="text-6xl font-bold text-white underline underline-offset-8 mb-4">
                Our Values
              </h2>
              <p className="text-white text-3xl leading-relaxed mt-4">
                NUImpact is built on a foundation of inclusivity, empathy, humility, community, and intention. We strive to create a space where everyone feels welcome and valued.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FLOWER - Centered in column to avoid overlap */}
        <div className="flex justify-center lg:justify-center transform scale-[0.40] sm:scale-[0.55] md:scale-[0.7] lg:scale-[0.65] origin-center">
          <FlowerCircles values={items} />
        </div>
      </div>
    </section>
  );
}
