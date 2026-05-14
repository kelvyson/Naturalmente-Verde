import { MapPin, Phone, Leaf } from 'lucide-react'

function Footer() {
  return (
    <footer className="relative w-full max-w-full bg-green-950 text-white mt-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Naturalmente Verde
          </h2>

          <p className="text-gray-300 leading-relaxed">
            Produtos naturais selecionados para promover saúde,
            bem-estar e alimentação consciente.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contato
          </h3>

          <div className="space-y-3 text-gray-300">

            <p className="flex items-center gap-2">
              <Phone size={18} />
              (61) 99670-1233
            </p>

            

            <p className="flex items-center gap-2">
              <MapPin size={18} />
              Brazlândia - DF
            </p>

          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">
            Atendimento
          </h3>

          <p className="text-gray-300">
            Segunda a Sábado
          </p>

          <p className="text-gray-300">
            09:00 às 18:30
          </p>
        </div>
      </div>

      <div className="border-t border-green-800 py-5 text-center text-gray-400 text-sm">
        © 2026 Naturalmente Verde — Todos os direitos reservados.
      </div>
    </footer>
  )
}

export default Footer