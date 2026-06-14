import heroimg from "../assets/imgs/hero.jpg";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <video 
            src="/videos-transitions/hero.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full h-full object-cover opacity-80"
          ></video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div> 

      <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
      <a href="#intro"><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
          />
        </svg></a>
        
        
      </div>
    </section>
  );
}

export default Hero;