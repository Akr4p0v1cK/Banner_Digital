
export default function BlogAndCTA() {
  const posts = [
    {
      author: "Mesbah",
      date: "April 10",
      title: "Inspiring the World, One Project at a Time for the man"
    },
    {
      author: "Mesbah",
      date: "April 12",
      title: "Let's bring your ideas to life! Contact me, and let's"
    },
    {
      author: "Mesbah",
      date: "April 15",
      title: "Each one showcases our approach and dedication man"
    }
  ];

  return (
    <section className="w-full pb-24 pt-12 bg-black flex flex-col gap-32">
      
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="w-full bg-gradient-to-r from-[#0f0f0f] to-[#1a1a1a] p-12 md:p-20 rounded-3xl border border-white/5 relative overflow-hidden flex flex-col items-center text-center gap-8 shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-dark/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white relative z-10 max-w-4xl tracking-tight leading-tight">
            Elevate your brand <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">with Me</span>
          </h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl relative z-10">
            A personal portfolio is a collection of your work, achievements, and skills that highlights your abilities and professional growth.
          </p>
          <a href="#" className="relative z-10 inline-block px-10 py-5 bg-brand text-black font-bold text-lg uppercase tracking-wider rounded-full hover:bg-brand-dark transition-colors mt-4">
            Start a Project
          </a>
        </div>
      </div>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-16 text-center max-w-3xl mx-auto">
          Elevating Personal Branding through <span className="text-brand">Powerful Portfolios</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-[#0a0a0a] rounded-2xl p-8 border border-white/5 hover:border-brand-dark/50 transition-colors group flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand mb-6">
                  <span>{post.author}</span>
                  <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white leading-snug mb-8 group-hover:text-brand transition-colors">
                  {post.title}
                </h3>
              </div>
              <a href="#" className="text-zinc-400 font-semibold hover:text-white uppercase tracking-wider text-sm flex items-center gap-2">
                Read More &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
