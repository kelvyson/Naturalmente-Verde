import { Link, useNavigate } from 'react-router-dom'
import { Search } from 'lucide-react'
import { useState } from 'react'
import products from '../data/products'

function Header() {
  const [search, setSearch] = useState('')
  const [notFound, setNotFound] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()

    if (!search.trim()) return

    const foundProduct = products.find((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )

    if (foundProduct) {
      setNotFound(false)

      navigate('/catalogo', {
        state: {
          search: search,
        },
      })
    } else {
      setNotFound(true)
    }
  }

  return (
    <>
      {/* HEADER */}
      <header className="relative z-50 w-full bg-[#f5f3ee] border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-5">

          <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6">

            {/* BUSCA */}
            <div className="w-full">

              <form onSubmit={handleSearch} className="relative w-full">

                <input
                  type="text"
                  placeholder="Buscar produtos..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    setNotFound(false) // limpa mensagem ao digitar
                  }}
                  className="
                    w-full
                    border
                    border-green-700
                    rounded-full
                    py-3
                    px-5
                    pr-14
                    outline-none
                    bg-white
                    transition-all
                    duration-300
                    focus:ring-4
                    focus:ring-green-200
                    focus:border-green-800
                    hover:shadow-md
                  "
                />

                <button
                  type="submit"
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    transition-all
                    duration-300
                    hover:scale-125
                    hover:rotate-12
                  "
                >
                  <Search className="text-green-700" size={22} />
                </button>

              </form>

              {/* 🔥 MENSAGEM ELEGANTE */}
              {notFound && (
                <p className="text-sm text-red-500 mt-2 ml-2 animate-fade-in">
                  Nenhum produto encontrado.
                </p>
              )}

            </div>

            {/* LOGO */}
            <div className="flex justify-center">

              <Link to="/" className="transition-all duration-500 hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Naturalmente Verde"
                  className="w-32 sm:w-40 md:w-44 object-contain mx-auto drop-shadow-lg"
                />
              </Link>

            </div>

            {/* BOTÃO */}
            <div className="flex justify-center lg:justify-end">

              <a
                href="https://wa.me/556196701233"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  inline-flex
                  items-center
                  justify-center
                  overflow-hidden

                  min-w-[200px]
                  h-[56px]

                  px-8
                  rounded-2xl

                  bg-gradient-to-r
                  from-orange-400
                  to-orange-500

                  text-white
                  text-base
                  font-semibold
                  tracking-wide

                  shadow-lg

                  transition-all
                  duration-300

                  hover:scale-105
                  hover:-translate-y-1
                  hover:shadow-2xl
                  hover:from-orange-500
                  hover:to-orange-600

                  active:scale-95
                "
              >
                <span className="absolute inset-0 translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000 bg-white/20 skew-x-12"></span>

                <span className="relative z-10">
                  Fale Conosco
                </span>

              </a>

            </div>

          </div>
        </div>
      </header>

      {/* MENU */}
      <nav className="relative z-50 w-full bg-orange-400 shadow-md">

        <div className="max-w-7xl mx-auto px-4">

          <ul className="flex flex-wrap justify-center items-center gap-8 py-4 text-white font-semibold">

            {[
              { name: 'Home', path: '/' },
              { name: 'Produtos', path: '/catalogo' },
              { name: 'Sobre', path: '/sobre' },
              { name: 'Contato', path: '/contato' },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="
                    relative
                    transition-all
                    duration-300
                    hover:text-green-900
                    hover:scale-110
                    after:content-['']
                    after:absolute
                    after:left-0
                    after:-bottom-1
                    after:w-0
                    after:h-[2px]
                    after:bg-green-900
                    after:transition-all
                    after:duration-300
                    hover:after:w-full
                  "
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>

        </div>
      </nav>
    </>
  )
}

export default Header