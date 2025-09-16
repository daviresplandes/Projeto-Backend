import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="page">
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 fade-in">Belém Mais Limpa</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto fade-in">Sistema inteligente de coleta de lixo para nossa cidade. Encontre pontos de coleta, consulte horários e contribua para um Belém mais sustentável.</p>
          <div className="space-x-4 fade-in">
            <Link to="/mapa" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200">Ver Mapa</Link>
            <Link to="/horarios" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200">Consultar Horários</Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">Nossos Serviços</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-hover bg-white p-8 rounded-xl shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🗺</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Mapa Interativo</h4>
              <p className="text-gray-600 text-center">Localize facilmente os pontos de coleta mais próximos da sua região em Belém.</p>
            </div>
            <div className="card-hover bg-white p-8 rounded-xl shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⏰</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Horários Atualizados</h4>
              <p className="text-gray-600 text-center">Consulte os horários de coleta por bairro e nunca perca o dia da coleta.</p>
            </div>
            <div className="card-hover bg-white p-8 rounded-xl shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">📋</span>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">Documentação</h4>
              <p className="text-gray-600 text-center">Acesse leis municipais e dicas importantes sobre reciclagem e descarte correto.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <div className="text-gray-600">Pontos de Coleta</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">71</div>
              <div className="text-gray-600">Bairros Atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1.5M</div>
              <div className="text-gray-600">Habitantes Beneficiados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">Cobertura da Cidade</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

