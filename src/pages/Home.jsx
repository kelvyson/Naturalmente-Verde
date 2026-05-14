import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import { Leaf } from 'lucide-react'
import StoriesSection from '../components/StoriesSection'
import SocialSection from '../components/SocialSection'

function Home() {
  return (
    <>
      {/* HERO */}
      <section
        className="
          relative
          z-0
          min-h-screen
          bg-cover
          bg-center
          flex
          items-center
          justify-center
          overflow-hidden
        "
        style={{
          backgroundImage:
            "url('https://diaonline.ig.com.br/wp-content/uploads/2020/05/produtos-naturais-em-brasilia_capa-e1590591540708.jpg')",
        }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>

        {/* EFEITOS */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black/50 to-transparent"></div>

        {/* CONTEÚDO */}
        <div
          className="
            relative
            z-10
            w-full
            max-w-5xl
            mx-auto
            px-6
            text-center
            text-white
            flex
            flex-col
            items-center
          "
        >

          {/* TAG */}
          <div
            className="
              inline-flex
              items-center
              gap-3
              bg-white/10
              border
              border-white/20
              backdrop-blur-xl
              px-8
              py-4
              rounded-full
              mb-10
              shadow-2xl
            "
          >

            <Leaf
              size={24}
              className="text-orange-300"
            />

            <span
              className="
                text-base
                md:text-lg
                tracking-wide
                font-medium
              "
            >
              Saúde • Bem-estar • Alimentação Natural
            </span>

          </div>

          {/* TÍTULO */}
          <h1
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-light
              leading-tight
              drop-shadow-2xl
            "
          >
            Sua loja de
          </h1>

          <h2
          className="
          handmade-title
          text-6xl
          sm:text-7xl
          md:text-8xl
          mb-8
        "
      >
        Produtos Naturais
      </h2>

          {/* TEXTO */}
          <p
            className="
              max-w-2xl
              text-lg
              md:text-xl
              text-gray-200
              leading-relaxed
              mb-14
            "
          >
            Alimentação consciente, saúde e bem-estar com produtos naturais
            cuidadosamente selecionados para transformar sua rotina.
          </p>

          {/* BOTÕES */}
          <div
            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-6
            "
          >

            {/* BOTÃO CATÁLOGO */}
            <Link
              to="/catalogo"
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                gap-3
                overflow-hidden
                bg-orange-400
                hover:bg-orange-500
                text-white
                min-w-[220px]
                px-10
                py-5
                rounded-2xl
                font-semibold
                text-lg
                shadow-[0_15px_35px_rgba(0,0,0,0.35)]
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-1
                active:scale-95
              "
            >

              {/* brilho */}
              <span
                className="
                  absolute
                  inset-0
                  bg-white/20
                  translate-x-[-130%]
                  group-hover:translate-x-[130%]
                  transition-transform
                  duration-700
                  skew-x-12
                "
              ></span>

              <span className="relative z-10">
                Ver Catálogo
              </span>

            </Link>

            {/* BOTÃO WHATSAPP */}
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
                gap-3
                overflow-hidden
                border
                border-white/30
                bg-white/10
                backdrop-blur-md
                text-white
                min-w-[220px]
                px-10
                py-5
                rounded-2xl
                font-semibold
                text-lg
                shadow-[0_15px_35px_rgba(0,0,0,0.35)]
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
                hover:scale-105
                hover:-translate-y-1
                active:scale-95
              "
            >

              {/* brilho */}
              <span
                className="
                  absolute
                  inset-0
                  bg-white/30
                  translate-x-[-130%]
                  group-hover:translate-x-[130%]
                  transition-transform
                  duration-700
                  skew-x-12
                "
              ></span>

              <FaWhatsapp
                size={24}
                className="relative z-10"
              />

              <span className="relative z-10">
                WhatsApp
              </span>

            </a>

          </div>

        </div>

      </section>
{/* STORIES PREMIUM */}


      <StoriesSection />


      {/* REDES SOCIAIS */}
      <SocialSection />
    </>
  )
}

export default Home