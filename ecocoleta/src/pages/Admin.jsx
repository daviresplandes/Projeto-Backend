import { useState } from 'react'
import { useAuth } from '../security/AuthContext.jsx'

export default function AdminPage() {
  const { currentUser, logout } = useAuth()
  const [showAdd, setShowAdd] = useState(false)

  const saveNewPoint = () => {
    alert('Novo ponto de coleta salvo com sucesso! (demo)')
    setShowAdd(false)
  }

  return (
    <div className="page">
      <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Painel Administrativo</h2>
              <p className="text-green-100">Bem-vindo, <span className="font-semibold">{currentUser?.name || 'Administrador'}</span></p>
            </div>
            <button onClick={logout} className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">Sair</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard title="Pontos Ativos" value="147" color="green" icon="📍" />
          <StatCard title="Coletas Hoje" value="23" color="blue" icon="🚛" />
          <StatCard title="Relatórios" value="8" color="yellow" icon="⚠" />
          <StatCard title="Eficiência" value="94%" color="green" icon="📊" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Gerenciar Pontos de Coleta</h3>
            <div className="space-y-4">
              <button onClick={() => setShowAdd(true)} className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">Adicionar Novo Ponto</button>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Editar Pontos Existentes</button>
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors">Remover Pontos</button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Gerenciar Horários</h3>
            <div className="space-y-4">
              <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">Atualizar Horários</button>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Programar Coletas</button>
              <button className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition-colors">Relatórios de Coleta</button>
            </div>
          </div>
        </div>

        {showAdd && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Adicionar Novo Ponto de Coleta</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nome do Local</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bairro</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>Centro</option>
                  <option>Nazaré</option>
                  <option>Batista Campos</option>
                  <option>Reduto</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Coleta</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>Lixo Comum</option>
                  <option>Reciclável</option>
                  <option>Orgânico</option>
                  <option>Eletrônico</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Capacidade (L)</label>
                <input type="number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <div className="mt-4 flex space-x-4">
              <button onClick={saveNewPoint} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">Salvar</button>
              <button onClick={() => setShowAdd(false)} className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function StatCard({ title, value, color, icon }) {
  const colorMap = {
    green: 'text-green-600 bg-green-100',
    blue: 'text-blue-600 bg-blue-100',
    yellow: 'text-yellow-600 bg-yellow-100',
  }
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm">{title}</p>
          <p className={`text-2xl font-bold ${color === 'yellow' ? 'text-yellow-600' : color === 'blue' ? 'text-blue-600' : 'text-green-600'}`}>{value}</p>
        </div>
        <div className={`w-12 h-12 ${colorMap[color]} rounded-full flex items-center justify-center`}>
          <span className={`${color === 'yellow' ? 'text-yellow-600' : color === 'blue' ? 'text-blue-600' : 'text-green-600'} text-xl`}>{icon}</span>
        </div>
      </div>
    </div>
  )
}

