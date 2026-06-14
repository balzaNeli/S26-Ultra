function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-[#10142A]/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center gap-30">
        <a
          className="hover:text-gray-300 font-bold hover:scale-108 transition-all duration-300 "
          href="#intro"
        >
          Intro
        </a>
        <a
          className="hover:text-gray-300 font-bold hover:scale-108 transition-all duration-300"
          href="#camera"
        >
          Câmera
        </a>
        <a
          className="hover:text-gray-300 font-bold hover:scale-108 transition-all duration-300"
          href="#performance"
        >
          Performance
        </a>
        <a
          className="hover:text-gray-300 font-bold hover:scale-108 transition-all duration-300"
          href="#cores"
        >
          Cores
        </a>
        <button className="cursor-pointer font-bold hover:scale-108 transition-all duration-300 bg-blue-600 hover:bg-blue-800 px-6 py-2 rounded-full">
          Comprar
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
