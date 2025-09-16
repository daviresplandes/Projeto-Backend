export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌱</span>
              </div>
              <h3 className="text-xl font-bold">EcoColeta Belém</h3>
            </div>
            <p className="text-green-200 text-sm">Sistema Municipal de Coleta de Resíduos Sólidos da cidade de Belém do Pará.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm text-green-200">
              <p>📞 (91) 3184-8500</p>
              <p>📧 sesan@belem.pa.gov.br</p>
              <p>📍 Av. Governador José Malcher, 1291</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Horário de Atendimento</h4>
            <div className="space-y-2 text-sm text-green-200">
              <p>Segunda a Sexta: 7h às 17h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Emergências: 24h</p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="text-green-200 hover:text-white transition-colors block">Portal da Transparência</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors block">Prefeitura de Belém</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors block">Ouvidoria</a>
            </div>
          </div>
        </div>
        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-200">
          <p>&copy; 2024 Prefeitura Municipal de Belém. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

