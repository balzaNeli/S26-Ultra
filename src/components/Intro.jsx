


import pretoImg from "../assets/imgs/preto.jpg";

function Intro(){


    return(
        <section className="bg-black py-20 px-6 shadow-lg shadow-slate-950/50" id="intro">
            <div className="grid grid-cols-2 ">
                <div className="max-w-5xl mx-auto text-center" data-aos="fade-right">
                    <h1 className="text-6xl md:text-8xl font-bold mb-6 ">Samsung Galaxy S26 Ultra</h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Prepare-se para conhecer o novo smartphone da linha S</p>
                    <p className="text-lg md:text-xl text-gray-300 mb-2 max-w-3xl mx-auto">O telefone AI com tela de Privacidade incorporada</p>
                    <p className="text-lg md:text-xl text-white mb-2 mt-30 text-justify max-w-3xl mx-auto">O Galaxy S26 Ultra é o smartphone premium mais avançado da Samsung. Lançado com foco em poder de fogo e privacidade, ele se destaca pelo processador Snapdragon 8 Elite Gen 5, câmera principal de 200 MP, a icônica caneta S Pen integrada e uma inédita tela antirreflexo com proteção de privacidade</p>
                </div>
                <div data-aos="fade-left">
                    <img className="rounded-2xl" src={pretoImg} alt="S26" />
                </div>
            </div>
        </section>
    )
}

export default Intro