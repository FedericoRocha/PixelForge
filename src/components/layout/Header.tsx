const Header = () => {
  return (
    <header className="relative min-h-[70vh] flex flex-col justify-center items-center bg-[#171B22] overflow-hidden">
      {/* Gradiente de fondo sutil */}
      <div className="absolute inset-0 pointer-events-none select-none z-0" aria-hidden="true">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] rounded-full blur-3xl opacity-60 bg-gradient-to-tr from-[#8b5cf6] via-[#06b6d4] to-[#f97316] animate-pulse-slow" />
      </div>
      <div className="relative z-10 flex flex-col items-center gap-8 w-full px-4">
        <img
          src="/src/assets/logo.png"
          alt="PixelForge Logo"
          className="w-32 h-32 md:w-44 md:h-44 drop-shadow-2xl mb-2 animate-fade-in"
          style={{ imageRendering: "pixelated", filter: "drop-shadow(0 0 24px #8b5cf6)" }}
        />
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight text-center animate-fade-in">
          Desarrollamos <span className="text-[#8b5cf6]">ideas</span> en <span className="text-[#06b6d4]">código</span>
        </h1>
        <button
          onClick={() => {
            const element = document.getElementById('contact');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="mt-4 px-8 py-3 rounded-xl bg-gradient-to-tr from-[#8b5cf6] via-[#06b6d4] to-[#f97316] text-white font-semibold text-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] animate-fade-in cursor-pointer"
        >
          ¡Hablemos de tu proyecto!
        </button>
      </div>
    </header>
  );
};

export default Header;
