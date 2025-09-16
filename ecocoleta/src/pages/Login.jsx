import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../security/AuthContext.jsx'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { login, quickLogin } = useAuth()
  const navigate = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    if (!username || !password) {
      setError('Por favor, preencha todos os campos.')
      return
    }
    const res = login(username, password)
    if (!res.ok) {
      setError(res.message || 'Falha no login')
      return
    }
    if (res.user.role === 'admin') navigate('/admin')
    else navigate('/')
  }

  const doQuickLogin = (role) => {
    const user = quickLogin(role)
    if (user.role === 'admin') navigate('/admin')
    else navigate('/')
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🔐</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Acesso ao Sistema</h2>
            <p className="text-gray-600 mt-2">Entre com suas credenciais</p>
          </div>

          <form onSubmit={submit} className="space-y-6">
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usuário</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Digite seu usuário" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Digite sua senha" />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                <span className="ml-2 text-sm text-gray-600">Lembrar-me</span>
              </label>
              <a className="text-sm text-green-600 hover:text-green-500">Esqueceu a senha?</a>
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-medium">Entrar</button>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-center text-sm text-gray-600 mb-4">Acesso rápido para demonstração:</p>
            <div className="space-y-2">
              <button onClick={() => doQuickLogin('admin')} className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">Entrar como Administrador</button>
              <button onClick={() => doQuickLogin('user')} className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors text-sm">Entrar como Usuário</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

