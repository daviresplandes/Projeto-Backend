import { createContext, useContext, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)

  const login = (username, password) => {
    if (username === 'admin' && password === 'admin123') {
      const user = { username: 'admin', role: 'admin', name: 'Administrador do Sistema' }
      setCurrentUser(user)
      return { ok: true, user }
    }
    if (username === 'user' && password === 'user123') {
      const user = { username: 'user', role: 'user', name: 'Usuário Comum' }
      setCurrentUser(user)
      return { ok: true, user }
    }
    return { ok: false, message: 'Credenciais inválidas. Tente admin/admin123 ou user/user123' }
  }

  const quickLogin = (role) => {
    if (role === 'admin') {
      const user = { username: 'admin', role: 'admin', name: 'Administrador do Sistema' }
      setCurrentUser(user)
      return user
    }
    const user = { username: 'user', role: 'user', name: 'Usuário Comum' }
    setCurrentUser(user)
    return user
  }

  const logout = () => setCurrentUser(null)

  const value = useMemo(() => ({ currentUser, login, quickLogin, logout }), [currentUser])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

