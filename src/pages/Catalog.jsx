import products from '../data/products'
import ProductCard from '../components/ProductCard'
import SocialSection from '../components/SocialSection'
import { useLocation } from 'react-router-dom'

function Catalog() {
  const location = useLocation()
  const searchQuery = location.state?.search || ''

  const filteredProducts = products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  )
  

  return (
    <section className="w-full bg-[#f5f3ee] py-28 pb-32 overflow-hidden">

      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-24">

          <span
            className="
              inline-block
              bg-green-100
              text-green-700
              px-5
              py-2
              rounded-full
              text-sm
              font-semibold
              tracking-wide
              mb-6
            "
          >
            
          </span>

          <h1
            className="
              handmade-title
              text-5xl
              sm:text-6xl
              md:text-7xl
              mb-8
            "
          >
            Nossos Produtos
          </h1>

          <div className="w-40 h-1 bg-orange-400 mx-auto rounded-full mb-8"></div>

          <p
            className="
             text-base
              md:text-lg
              tracking-[0.28em]
              uppercase
              text-gray-700
              font-semibold"
            
          >
            Produtos  naturais  cuidadosamente  selecionados  para  promover
            saúde, qualidade e bem-estar no seu dia a dia.
          </p>

          {/* RESULTADO DA BUSCA */}
          {searchQuery && (
            <div
              className="
                mt-8
                inline-flex
                items-center
                justify-center
                bg-white
                border
                border-green-200
                text-green-700
                px-6
                py-3
                rounded-2xl
                shadow-md
                text-sm
                font-medium
              "
            >
              Resultado da busca: "{searchQuery}"
            </div>
          )}

        </div>

        {/* PRODUTOS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-10
            justify-items-center
          "
        >

          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:scale-[1.02]
                "
              >
                <ProductCard product={product} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center">

              <div
                className="
                  bg-white
                  rounded-[30px]
                  shadow-xl
                  px-10
                  py-16
                  max-w-xl
                  mx-auto
                "
              >

                <h2 className="text-3xl font-bold text-green-800 mb-4">
                  Produto não encontrado
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed">
                  Não encontramos produtos com o nome "{searchQuery}".
                </p>

              </div>

            </div>
          )}

        </div>

      </div>

      {/* REDES SOCIAIS */}
      <div className="mt-28">
        <SocialSection />
      </div>

    </section>
  )
}

export default Catalog