import SocialSection from '../components/SocialSection'
import { FaWhatsapp } from 'react-icons/fa'
import { useEffect, useState } from 'react'

function About() {

  // 🔥 imagens do slideshow (ajuste os nomes conforme sua pasta)
  const images = [
    "/about/about1.jpeg",
    "/about/about2.jpeg",
    "/about/about3.jpeg",
    "/about/about4.jpeg",
    "/about/about5.jpeg",
  ]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full bg-[#f5f3ee] overflow-hidden">

      {/* HERO */}
      <div className="relative bg-green-900 text-white pt-32 pb-36 overflow-hidden">

        {/* EFEITO FUNDO */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">

          <h1 className="handmade-title-light text-5xl sm:text-6xl md:text-7xl mb-8">
            Quem Somos
          </h1>

          <div className="w-40 h-1 bg-orange-400 mx-auto rounded-full mb-10"></div>

          <p className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed text-gray-200">
            A Naturalmente Verde nasceu em Brazlândia com o propósito de
            oferecer produtos naturais de qualidade, promovendo saúde,
            equilíbrio e bem-estar para o dia a dia das pessoas.
          </p>

        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGEM / SLIDESHOW */}
          <div className="flex justify-center">
              <div
                className="
                  relative
                  w-full
                  max-w-[560px]
                  h-[520px]
                  rounded-[32px]
                  overflow-hidden
                  shadow-2xl
                "
              >

                {images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt="Naturalmente Verde"
                    className={`
                      absolute inset-0
                      w-full
                      h-full
                      object-cover
                      transition-opacity duration-1000
                      ${i === index ? "opacity-100" : "opacity-0"}
                    `}
                  />
                ))}

              </div>
            </div>

          {/* TEXTO */}
          <div className="text-center lg:text-left">

            <h2 className="text-4xl md:text-5xl font-bold text-green-800 leading-tight mb-8">
              Sua loja de nutrição e bem-estar
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Desde 2024, a Naturalmente Verde vem construindo uma história
              baseada no cuidado, na qualidade e no amor por uma vida mais saudável.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Ao longo dessa jornada, buscamos evoluir constantemente para oferecer
              produtos selecionados com carinho, proporcionando uma experiência
              acolhedora e confiável para cada cliente.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mb-10">
              Em cada detalhe da nossa loja existe dedicação, respeito e a missão
              de incentivar hábitos mais saudáveis através da alimentação consciente
              e do bem-estar natural.
            </p>

            {/* BOTÃO */}
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
                bg-orange-400
                hover:bg-orange-500
                text-white
                font-semibold
                text-lg
                px-10
                py-5
                rounded-2xl
                shadow-[0_15px_35px_rgba(0,0,0,0.18)]
                transition-all
                duration-300
                hover:scale-105
                hover:-translate-y-1
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.28)]
                active:scale-95
              "
            >

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

              <FaWhatsapp size={22} className="relative z-10" />

              <span className="relative z-10">
                Fale Conosco
              </span>

            </a>

          </div>

        </div>

      </div>

      <SocialSection />

    </section>
  )
}

export default About