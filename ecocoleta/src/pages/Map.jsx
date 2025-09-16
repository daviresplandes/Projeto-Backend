import { useMemo, useState } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'

const INITIAL_POINTS = [
  { lat: -1.4558, lng: -48.4902, name: 'Centro - Praça da República', type: 'comum', district: 'centro' },
  { lat: -1.452, lng: -48.4889, name: 'Nazaré - Praça Batista Campos', type: 'reciclavel', district: 'nazare' },
  { lat: -1.4489, lng: -48.4856, name: 'Batista Campos - Av. Nazaré', type: 'comum', district: 'batista-campos' },
  { lat: -1.4601, lng: -48.4931, name: 'Reduto - Estação das Docas', type: 'organico', district: 'reduto' },
  { lat: -1.4578, lng: -48.4945, name: 'Campina - Ver-o-Peso', type: 'eletronico', district: 'campina' },
]

const TYPE_COLORS = {
  comum: '#3b82f6',
  reciclavel: '#10b981',
  organico: '#f59e0b',
  eletronico: '#ef4444',
}

const TYPE_LABEL = {
  comum: 'Lixo Comum',
  reciclavel: 'Reciclável',
  organico: 'Orgânico',
  eletronico: 'Eletrônico',
}

export default function MapPage() {
  const [district, setDistrict] = useState('')
  const [type, setType] = useState('')

  const filtered = useMemo(() => {
    return INITIAL_POINTS.filter((p) =>
      (district ? p.district === district : true) && (type ? p.type === type : true)
    )
  }, [district, type])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-green-600 text-white">
          <h2 className="text-3xl font-bold mb-2">Mapa de Pontos de Coleta</h2>
          <p className="text-green-100">Encontre os pontos de coleta mais próximos em Belém</p>
        </div>
        <div className="p-6">
          <div className="mb-4 flex flex-wrap gap-4">
            <select value={district} onChange={(e) => setDistrict(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option value="">Todos os Bairros</option>
              <option value="centro">Centro</option>
              <option value="nazare">Nazaré</option>
              <option value="batista-campos">Batista Campos</option>
              <option value="reduto">Reduto</option>
              <option value="campina">Campina</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option value="">Todos os Tipos</option>
              <option value="comum">Lixo Comum</option>
              <option value="reciclavel">Reciclável</option>
              <option value="organico">Orgânico</option>
              <option value="eletronico">Eletrônico</option>
            </select>
          </div>

          <div className="w-full h-96 rounded-lg border-2 border-gray-200 overflow-hidden">
            <MapContainer center={[-1.4558, -48.4902]} zoom={13} style={{ height: '100%', width: '100%' }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="© OpenStreetMap contributors" />
              {filtered.map((point, idx) => (
                <CircleMarker key={idx} center={[point.lat, point.lng]} radius={8} pathOptions={{ color: TYPE_COLORS[point.type], fillColor: TYPE_COLORS[point.type], fillOpacity: 0.7 }}>
                  <Popup>
                    <strong>{point.name}</strong>
                    <br />
                    Tipo: {TYPE_LABEL[point.type]}<br />
                    Bairro: {point.district}
                  </Popup>
                </CircleMarker>
              ))}
            </MapContainer>
          </div>
        </div>
        <div className="p-6 bg-gray-50">
          <h3 className="text-lg font-semibold mb-4">Legenda</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              <span className="text-sm">Lixo Comum</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm">Reciclável</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              <span className="text-sm">Orgânico</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm">Eletrônico</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

