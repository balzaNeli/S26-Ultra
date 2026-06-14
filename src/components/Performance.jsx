function Performance() {
  return (
    <section className="bg-slate-950 py-20 px-6" id="performance">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 " data-aos="fade-down">
          <h1 className="text-3xl font-bold mb-4">
            Performance extraordinária combinada com IA.
          </h1>
        </div>

        <div>
          <div className="grid grid-cols-4 gap-8 mb-16 bg-slate-900 rounded-3xl p-8" data-aos="zoom-in">
            <div>
              <h3 className="h3-performance">Tela: </h3>
              <p className="space-performance">
                6,9 polegadas Dynamic LTPO AMOLED 2X com resolução de 3120 x
                1440 (QHD+) e taxa de 120 Hz
              </p>
            </div>
            <div>
              <h3 className="h3-performance">Câmeras:</h3>
              <ul className="space-performance">
                <li>Principal: 200 MP (com abertura melhorada).</li>
                <li>Ultra Wide: 50 MP.</li>
                <li>Teleobjetiva: 10 MP (Zoom de 3x).</li>
                <li>
                  Periscópio: 50 MP (Zoom de 5x e zoom digital de até 100x).
                </li>
                <li>Frontal: 12 MP.</li>
              </ul>
            </div>
            <div>
              <h3 className="h3-performance">Tela: </h3>
              <p className="space-performance">
                {" "}
                Possui uma função de "tela anti-curiosos", limitando o ângulo de
                visão lateral e protegendo suas informações contra pessoas ao
                redor
              </p>
            </div>
            <div>
              <h3 className="h3-performance">Desempenho: </h3>
              <p className="space-performance">
                Equipado com o chip Snapdragon 8 Elite Gen 5 for Galaxy,
                acompanhado de 12 GB ou 16 GB de RAM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Performance;
