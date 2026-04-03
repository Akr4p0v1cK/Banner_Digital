
export default function Features() {
  const features = [
    {
      num: "01.",
      title: "A Portfolio of Creativity",
      desc: "Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency"
    },
    {
      num: "02.",
      title: "My Portfolio of Innovation",
      desc: "My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses"
    },
    {
      num: "03.",
      title: "A Showcase of My Projects",
      desc: "In this portfolio, you’ll find a curated selection of projects that highlight my skills in responsive web design"
    }
  ];

  return (
    <section className="w-full py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Side: Image and Heading */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <div className="w-full h-[400px] bg-zinc-900 rounded-2xl overflow-hidden relative border border-white/5 shadow-2xl">
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/40 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight mt-6 text-white text-balance">
            Inspiring The World <span className="text-brand">One Project</span>
          </h2>
          <p className="text-zinc-400 text-lg">
            Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
          </p>
        </div>

        {/* Right Side: Features List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          {features.map((item, idx) => (
            <div key={idx} className="flex gap-6 group cursor-default">
              <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-brand to-brand-dark group-hover:scale-110 transition-transform">
                {item.num}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-white group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
