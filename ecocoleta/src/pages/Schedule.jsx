import { useMemo, useState } from 'react'

const INITIAL_ROWS = [
  { bairro: 'Centro', tipo: 'comum', dias: 'Segunda, Quarta, Sexta', horario: '06:00 - 12:00', status: 'Ativo' },
  { bairro: 'Nazaré', tipo: 'reciclavel', dias: 'Terça, Quinta', horario: '07:00 - 11:00', status: 'Ativo' },
  { bairro: 'Batista Campos', tipo: 'comum', dias: 'Terça, Quinta, Sábado', horario: '05:30 - 11:30', status: 'Ativo' },
  { bairro: 'Reduto', tipo: 'organico', dias: 'Segunda, Quarta', horario: '06:30 - 10:30', status: 'Ativo' },
  { bairro: 'Campina', tipo: 'comum', dias: 'Segunda, Quarta, Sexta', horario: '07:00 - 13:00', status: 'Manutenção' },
]

const TYPE_TAG = {
  comum: { label: 'Comum', className: 'bg-blue-100 text-blue-800' },
  reciclavel: { label: 'Reciclável', className: 'bg-green-100 text-green-800' },
  organico: { label: 'Orgânico', className: 'bg-yellow-100 text-yellow-800' },
}

export default function SchedulePage() {
  const [search, setSearch] = useState('')
  const [tipo, setTipo] = useState('')

  const rows = useMemo(() => {
    return INITIAL_ROWS.filter((r) =>
      (search ? r.bairro.toLowerCase().includes(search.toLowerCase()) : true) &&
      (tipo ? r.tipo === tipo : true)
    )
  }, [search, tipo])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 bg-green-600 text-white">
          <h2 className="text-3xl font-bold mb-2">Horários de Coleta</h2>
          <p className="text-green-100">Consulte os horários de coleta por bairro e tipo de resíduo</p>
        </div>
        <div className="p-6">
          <div className="mb-6 flex flex-wrap gap-4">
            <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Buscar bairro..." className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent flex-1 min-w-64" />
            <select value={tipo} onChange={(e) => setTipo(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
              <option value="">Todos os Tipos</option>
              <option value="comum">Lixo Comum</option>
              <option value="reciclavel">Reciclável</option>
              <option value="organico">Orgânico</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-50">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Bairro</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Tipo</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Dias</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Horário</th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'bg-green-50/50' : ''}>
                    <td className="border border-gray-200 px-4 py-3">{row.bairro}</td>
                    <td className="border border-gray-200 px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-sm ${TYPE_TAG[row.tipo].className}`}>{TYPE_TAG[row.tipo].label}</span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3">{row.dias}</td>
                    <td className="border border-gray-200 px-4 py-3">{row.horario}</td>
                    <td className="border border-gray-200 px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-sm ${row.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

