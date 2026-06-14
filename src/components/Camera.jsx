function Camera() {
  return (
    <section
      className="bg-black py-20 px-6 shadow-lg shadow-slate-950/50"
      id="camera"
    >
      <div className="flex flex-col">
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-down">
          <h1 className="text-6xl md:text-8xl mb-6 ">
            <strong>A</strong> Câmera
          </h1>
          
        </div>
        <div className="flex justify-center mt-12 w-full px-4" data-aos="fade-up" data-aos-delay="200">
          <video 
            src="/videos-transitions/photoassist.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="w-full max-w-5xl rounded-3xl shadow-2xl shadow-slate-800"
          ></video>
        </div>
      </div>
    </section>
  );
}

export default Camera;
