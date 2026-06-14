import { useState } from 'react';
import pretoImg from '../assets/imgs/preto.jpg';
import roxoImg from '../assets/imgs/roxo.jpg';
import titanioImg from '../assets/imgs/sabortitanio.jpg';
import begeImg from '../assets/imgs/bege.jpg';

const coresData = [
  {
    id: 1,
    nome: "Preto",
    descricao: "Um clássico reinventado. O Preto Titânio oferece uma elegância sombria e sofisticada que combina perfeitamente com a força do aparelho.",
    imagem: pretoImg,
    corHex: "#1a1a1a"
  },
  {
    id: 2,
    nome: "Roxo",
    descricao: "Exclusivo e vibrante. O Roxo Titânio traz uma aura de realeza e modernidade para o seu Galaxy S26 Ultra.",
    imagem: roxoImg,
    corHex: "#45364b"
  },
  {
    id: 3,
    nome: "Sabor Titânio",
    descricao: "O acabamento natural e puro do titânio. Reflete a durabilidade premium e a leveza extrema do material em seu estado bruto.",
    imagem: titanioImg,
    corHex: "#a9a5a3"
  },
  {
    id: 4,
    nome: "Bege",
    descricao: "Suave e luxuoso. O Bege Titânio é a combinação perfeita entre o design clássico e o futurismo, com um brilho quente.",
    imagem: begeImg,
    corHex: "#d6cbbd"
  }
];

function Cores() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevColor = () => {
    setCurrentIndex((prev) => (prev === 0 ? coresData.length - 1 : prev - 1));
  };

  const nextColor = () => {
    setCurrentIndex((prev) => (prev === coresData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#0b0e1e] py-32 px-6 shadow-lg shadow-slate-950/50" id="cores">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold mb-16 text-center" data-aos="fade-down">Cores que impressionam</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Lado esquerdo: Informações */}
          <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left" data-aos="fade-right" data-aos-delay="200">
            <h3 className="text-4xl font-semibold mb-6 text-gradient h-12">{coresData[currentIndex].nome}</h3>
            <p className="text-gray-300 text-lg md:text-xl mb-12 leading-relaxed min-h-[80px] max-w-md">
              {coresData[currentIndex].descricao}
            </p>
            
            {/* Bolinhas de Seleção */}
            <div className="flex gap-6 items-center justify-center md:justify-start">
              {coresData.map((cor, index) => (
                <button
                  key={cor.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ease-out cursor-pointer ${
                    currentIndex === index ? 'border-white scale-110 shadow-[0_0_20px_rgba(255,255,255,0.4)]' : 'border-transparent hover:scale-105 opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: cor.corHex }}
                  aria-label={`Selecionar cor ${cor.nome}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Lado direito: Imagem e Setas */}
          <div className="order-1 md:order-2 relative group flex justify-center items-center" data-aos="fade-left" data-aos-delay="400">
            {/* Seta Esquerda */}
            <button 
              onClick={prevColor}
              className="absolute left-2 md:-left-8 z-10 bg-black/40 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Imagem */}
            <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded-3xl shadow-2xl transition-all duration-500">
              <img 
                key={coresData[currentIndex].imagem}
                src={coresData[currentIndex].imagem} 
                alt={coresData[currentIndex].nome} 
                className="w-full h-full object-cover transition-all duration-700 ease-in-out transform animate-fade-in"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none rounded-3xl"></div>
            </div>

            {/* Seta Direita */}
            <button 
              onClick={nextColor}
              className="absolute right-2 md:-right-8 z-10 bg-black/40 hover:bg-black/80 text-white p-4 rounded-full backdrop-blur-md transition-all duration-300 md:opacity-0 md:group-hover:opacity-100 cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cores;
