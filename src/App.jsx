import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ProductDetails from './pages/ProductDetails'
import About from './pages/About'
import Contact from './pages/Contact'

import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-x-clip bg-[#f5f3ee]">

      <Header />

      <main className="w-full overflow-x-clip">

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />

          {/* fallback */}
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>

      </main>

      <WhatsAppButton />
      <Footer />

    </div>
  )
}

export default App