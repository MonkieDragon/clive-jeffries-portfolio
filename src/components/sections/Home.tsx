import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
            Hi, I'm Clive
          </h1>
          <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
            I'm passionate about front end engineering, game development and
            small dogs called Poppy.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              href="#projects"
            >
              View Projects
            </a>
            <a
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] hover:bg-blue-500/10"
              href="#contact"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
