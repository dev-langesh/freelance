import Header from "../components/Header";

export default function Home() {
  return (
    <div className="font-slab">
      <section className="w-full h-screen bg-gradient-to-br to-purple-600 to from-blue-600 text-white rounded-br-[300px]">
        <Header />
        <h1 className="text-5xl px-6 font-bold leading-snug tracking-wider">
          24 Hour Urgent Business Funding
        </h1>
        <p className="p-6 tracking-wide">
          Pre-qualify for up to 5 Million by tomorrow! Urgent property
          settlement? Gap in cashflow? Deal of a lifetime? don’t let the banks
          hold you up!
        </p>
        <button className="bg-sky-400 py-2 px-6 m-6 rounded">
          Pre-Qualify In 15 Seconds
        </button>
      </section>
    </div>
  );
}
