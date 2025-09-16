import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import MapPage from './pages/Map.jsx'
import SchedulePage from './pages/Schedule.jsx'
import DocsPage from './pages/Docs.jsx'
import LoginPage from './pages/Login.jsx'
import AdminPage from './pages/Admin.jsx'
import { useAuth } from './security/AuthContext.jsx'

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth()
  if (!currentUser || currentUser.role !== 'admin') {
    return <Navigate to="/login" replace />
  }
  return children
}

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mapa" element={<MapPage />} />
          <Route path="/horarios" element={<SchedulePage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
