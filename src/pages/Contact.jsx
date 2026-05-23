import SocialSection from '../components/SocialSection'
import {
  Clock3,
  Phone,
  MapPin,
} from 'lucide-react'

function Contact() {
  return (
    <section className="w-full bg-[#f5f3ee] min-h-screen pt-28 pb-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div
          className="
            text-center
            mb-20
            animate-[fadeIn_1s_ease]
          "
        >

          <h1 className="handmade-title text-5xl sm:text-6xl md:text-7xl mb-8">
            Contato
          </h1>

          <div className="w-40 h-1 bg-orange-400 mx-auto rounded-full mb-8"></div>

          <p className="text-base md:text-lg tracking-[0.28em] uppercase text-gray-700 font-semibold">
            Entre em contato conosco e venha conhecer a Naturalmente Verde.
          </p>

        </div>

        {/* CONTEÚDO PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[650px]">

          {/* IMAGEM (COM HOVER MELHORADO) */}
          <div className="rounded-[30px] overflow-hidden shadow-xl relative group cursor-pointer">

            <img
              src="/Naturalmente-Verde/contact.jpeg"
              alt="Loja Naturalmente Verde"
              className="
                w-full
                h-full
                object-cover
                transition-transform
                duration-700
                group-hover:scale-110
                lg:object-cover
                object-center
              "
            />

            {/* overlay interativo */}
            <div className="
              absolute inset-0
              bg-black/0
              group-hover:bg-black/20
              transition-all duration-500
            "></div>

            {/* texto hover */}
            <div className="
              absolute bottom-6 left-6
              text-black
              opacity-0
              group-hover:opacity-100
              transition-all duration-500
            ">
              <p className="text-xl font-semibold">Nossa loja</p>
              <p className="text-sm">Naturalmente Verde</p>
            </div>

          </div>

          {/* COLUNA DIREITA (INFO + MAPA) */}
          <div className="grid grid-rows-2 gap-6">

            {/* INFORMAÇÕES */}
            <div className="
              bg-white/90
              backdrop-blur-sm
              rounded-[30px]
              shadow-xl
              p-8
              transition-all
              duration-500
              hover:shadow-2xl
              hover:-translate-y-1
            ">

              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Informações
              </h2>

              {/* HORÁRIO */}
              <div className="mb-6 flex gap-4 items-start group cursor-pointer">

  <div className="
    bg-orange-100
    p-4
    rounded-2xl
    transition-all
    duration-300
    group-hover:scale-110
    group-hover:bg-orange-200
  ">
    <Clock3
      className="
        text-orange-500
        transition-transform
        duration-300
        group-hover:rotate-12
      "
      size={26}
    />
  </div>

  <div>
    <h3 className="font-semibold text-green-900 group-hover:text-green-700 transition">
      Horário
    </h3>
    <p className="text-gray-700 text-sm">Seg a Sáb: 9h às 18:30h</p>
    <p className="text-gray-700 text-sm">Domingo: Fechado</p>
  </div>

</div>

              {/* CONTATO */}
              <div className="mb-6 flex gap-4 items-start group cursor-pointer">

            <div className="
              bg-orange-100
              p-4
              rounded-2xl
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-orange-200
            ">
              <Phone
                className="
                  text-orange-500
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
                size={26}
              />
            </div>

            <div>
              <h3 className="font-semibold text-green-900 group-hover:text-green-700 transition">
                Contato
              </h3>

              <a
                href="https://wa.me/556196701233"
                target="_blank"
                className="
                  text-gray-700 text-sm
                  hover:text-green-700
                  transition
                "
              >
                WhatsApp: (61) 99450-7002
              </a>
            </div>

          </div>

                        {/* ENDEREÇO */}
                        <div className="flex gap-4 items-start group cursor-pointer">

            <div className="
              bg-orange-100
              p-4
              rounded-2xl
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-orange-200
            ">
              <MapPin
                className="
                  text-orange-500
                  transition-transform
                  duration-300
                  group-hover:rotate-12
                "
                size={26}
              />
            </div>

            <div>
              <h3 className="font-semibold text-green-900 group-hover:text-green-700 transition">
                Endereço
              </h3>

              <p className="text-gray-700 text-sm">
                St. Norte Q 1 - Norte
              </p>
              <p className="text-gray-700 text-sm">
                Brasília - DF
              </p>
            </div>

          </div>

            </div>

            {/* MAPA (MELHORADO INTERAÇÃO) */}
            <div className="relative rounded-[30px] overflow-hidden shadow-2xl group cursor-pointer hover:shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-all">

              <a
                href="https://maps.app.goo.gl/eqaSZzDgbtzDHmTm7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3841.2987492493903!2d-48.197391075146506!3d-15.682287364906605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935bb70056504e81%3A0xdb49c58b6ed6de3c!2sNaturalmente%20Verde!5e0!3m2!1spt-BR!2sbr!4v1778435856442!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                />

                {/* overlay hover mapa */}
                <div className="
                  absolute inset-0
                  bg-black/0
                  group-hover:bg-black/10
                  transition-all duration-500
                "></div>

                {/* botão hover */}
                <div className="
                  absolute bottom-5 left-5
                  text-white
                  opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                ">
                  <p className="text-sm font-semibold">
                    Abrir no Google Maps →
                  </p>
                </div>

              </a>

            </div>

          </div>

        </div>

      </div>

      <SocialSection />

    </section>
  )
}

export default Contact