import FlowerCircles from "../components/FlowerCircles";

const items = [
  { label: "Inclusivity", text: "Everyone belongs. Everyone has a voice.", pos: "top", image: "/assets/images/nusis-presentation.png" },
  { label: "Empathy", text: "Everything starts with istening and understanding first.", pos: "left", image: "/assets/images/nuimpact-fund-meeting.png" },
  { label: "Humility", text: "No ego, just growth and improvement.", pos: "right", image: "/assets/images/nuimpact-guy-talking.png" },
  { label: "Community", text: "Great things are built together through collaboration and trust.", pos: "bottomLeft", image: "/assets/images/founding-team-original.png" },
  { label: "Intention", text: "Every desicion is made with thought and purpose.", pos: "bottomRight", image: "/assets/images/donors.png" },
];

export default function ValuesSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center gap-30 py-20"
      style={{
        background: `
    linear-gradient(
      to bottom,
      white 0%,
      var(--color-nuimpact-blue) 5%
    )
  `
      }}
    >
      <h2 className="mb-12 text-5xl font-bold text-white underline">
        Our Values
      </h2>

      <FlowerCircles values={items} />
    </section>
  );
}
