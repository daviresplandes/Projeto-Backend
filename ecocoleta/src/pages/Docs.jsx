import { useState } from 'react'

export default function DocsPage() {
  const [section, setSection] = useState('laws')

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-green-600 text-white">
          <h2 className="text-3xl font-bold mb-2">Documentação e Legislação</h2>
          <p className="text-green-100">Leis municipais, regulamentações e dicas para descarte correto</p>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <button onClick={() => setSection('laws')} className={`p-4 border-2 rounded-lg transition-all ${section==='laws' ? 'border-green-500 bg-green-50' : 'border-green-200 hover:border-green-500 hover:bg-green-50'}`}>
              <div className="text-2xl mb-2">⚖</div>
              <h3 className="font-semibold">Legislação</h3>
              <p className="text-sm text-gray-600">Leis e decretos municipais</p>
            </button>
            <button onClick={() => setSection('tips')} className={`p-4 border-2 rounded-lg transition-all ${section==='tips' ? 'border-green-500 bg-green-50' : 'border-green-200 hover:border-green-500 hover:bg-green-50'}`}>
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-semibold">Dicas de Reciclagem</h3>
              <p className="text-sm text-gray-600">Como reciclar corretamente</p>
            </button>
            <button onClick={() => setSection('disposal')} className={`p-4 border-2 rounded-lg transition-all ${section==='disposal' ? 'border-green-500 bg-green-50' : 'border-green-200 hover:border-green-500 hover:bg-green-50'}`}>
              <div className="text-2xl mb-2">🗑</div>
              <h3 className="font-semibold">Descarte Correto</h3>
              <p className="text-sm text-gray-600">Orientações para descarte</p>
            </button>
          </div>

          {section === 'laws' && (
            <div className="doc-section pl-6 py-4 mb-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-600">📋 Legislação Municipal</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Lei Municipal nº 9.413/2019</h4>
                  <p className="text-gray-700 mb-2">Institui a Política Municipal de Resíduos Sólidos de Belém e dá outras providências.</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Estabelece diretrizes para coleta seletiva</li>
                    <li>Define responsabilidades dos munícipes</li>
                    <li>Regulamenta o descarte de resíduos especiais</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-2">Decreto Municipal nº 102.847/2020</h4>
                  <p className="text-gray-700 mb-2">Regulamenta os horários e locais de coleta de lixo na cidade.</p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li>Horários permitidos para colocação do lixo</li>
                    <li>Multas por descumprimento: R$ 150 a R$ 500</li>
                    <li>Procedimentos para coleta de entulho</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {section === 'tips' && (
            <div className="doc-section pl-6 py-4 mb-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-600">♻ Dicas de Reciclagem</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-blue-800">🔵 Papel e Papelão</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Remova fitas adesivas e grampos</li>
                    <li>Não amasse excessivamente</li>
                    <li>Separe papéis brancos dos coloridos</li>
                    <li>Evite papéis sujos ou molhados</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-green-800">🟢 Vidro</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Lave bem antes do descarte</li>
                    <li>Remova tampas e rótulos</li>
                    <li>Embale vidros quebrados com cuidado</li>
                    <li>Separe por cores quando possível</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-yellow-800">🟡 Metal</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Latas de alumínio devem estar limpas</li>
                    <li>Amasse latas para economizar espaço</li>
                    <li>Separe metais ferrosos dos não-ferrosos</li>
                    <li>Remova etiquetas quando possível</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 text-red-800">🔴 Plástico</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Verifique o número de reciclagem</li>
                    <li>Lave recipientes antes do descarte</li>
                    <li>Remova tampas e rótulos</li>
                    <li>Evite plásticos muito sujos</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {section === 'disposal' && (
            <div className="doc-section pl-6 py-4 mb-6 border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-green-600">🗑 Guia de Descarte Correto</h3>
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-4">
                  <h4 className="font-semibold text-lg mb-2 text-red-800">⚠ Resíduos Perigosos</h4>
                  <p className="text-sm mb-2">Nunca descarte no lixo comum:</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Pilhas e baterias</li>
                      <li>Lâmpadas fluorescentes</li>
                      <li>Medicamentos vencidos</li>
                      <li>Produtos químicos</li>
                    </ul>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Óleo de cozinha usado</li>
                      <li>Equipamentos eletrônicos</li>
                      <li>Tintas e solventes</li>
                      <li>Pneus usados</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4">
                  <h4 className="font-semibold text-lg mb-2 text-green-800">✅ Pontos de Entrega Voluntária</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">Eletrônicos:</h5>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Shopping Pátio Belém</li>
                        <li>Parque Shopping Belém</li>
                        <li>Estação das Docas</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Óleo de Cozinha:</h5>
                      <ul className="list-disc list-inside text-sm space-y-1">
                        <li>Supermercados Líder</li>
                        <li>Rede Nazaré</li>
                        <li>Postos de combustível</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <h4 className="font-semibold text-lg mb-2 text-blue-800">📞 Contatos Úteis</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-medium">SESAN - Secretaria de Saneamento</p>
                      <p className="text-sm">(91) 3184-8500</p>
                      <p className="text-sm">sesan@belem.pa.gov.br</p>
                    </div>
                    <div>
                      <p className="font-medium">Coleta de Entulho</p>
                      <p className="text-sm">(91) 156 (Fala Belém)</p>
                      <p className="text-sm">Segunda a Sexta: 7h às 19h</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

