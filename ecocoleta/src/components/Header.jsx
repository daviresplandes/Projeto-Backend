import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../security/AuthContext.jsx'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser } = useAuth()
  const navigate = useNavigate()

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xl font-bold">🌱</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-600">EcoColeta Belém</h1>
              <p className="text-sm text-gray-600">Sistema Municipal de Coleta</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" className={({isActive}) => `nav-link px-4 py-2 ${isActive ? 'bg-green-50' : ''} text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium`}>Início</NavLink>
            <NavLink to="/mapa" className={({isActive}) => `nav-link px-4 py-2 ${isActive ? 'bg-green-50' : ''} text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium`}>Mapa</NavLink>
            <NavLink to="/horarios" className={({isActive}) => `nav-link px-4 py-2 ${isActive ? 'bg-green-50' : ''} text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium`}>Horários</NavLink>
            <NavLink to="/docs" className={({isActive}) => `nav-link px-4 py-2 ${isActive ? 'bg-green-50' : ''} text-green-600 hover:bg-green-50 rounded-lg transition-all duration-200 font-medium`}>Documentação</NavLink>
            {currentUser?.role === 'admin' ? (
              <button onClick={() => navigate('/admin')} className="nav-link px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg transition-all duration-200 font-medium">Admin</button>
            ) : (
              <NavLink to="/login" className={({isActive}) => `nav-link px-4 py-2 ${isActive ? 'bg-green-600 text-white' : 'bg-green-600 text-white'} hover:bg-green-700 rounded-lg transition-all duration-200 font-medium`}>Login</NavLink>
            )}
          </nav>

          <button className="md:hidden text-green-600" onClick={() => setIsOpen((v) => !v)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? '' : 'hidden'} md:hidden mt-4 space-y-2`}>
          <NavLink to="/" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg">Início</NavLink>
          <NavLink to="/mapa" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg">Mapa</NavLink>
          <NavLink to="/horarios" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg">Horários</NavLink>
          <NavLink to="/docs" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg">Documentação</NavLink>
          {currentUser?.role === 'admin' ? (
            <button onClick={() => { setIsOpen(false); navigate('/admin') }} className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg">Admin</button>
          ) : (
            <NavLink to="/login" onClick={() => setIsOpen(false)} className="block w-full text-left px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg">Login</NavLink>
          )}
        </div>
      </div>
    </header>
  )
}

