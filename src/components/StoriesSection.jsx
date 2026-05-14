import { useEffect, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,

} from 'lucide-react'

function StoriesSection() {

  const stories = [
    '/stories/post1.jpeg',
    '/stories/post2.jpeg',
    '/stories/post3.jpeg',
    '/stories/post4.jpeg',
    '/stories/post5.jpeg',
    '/stories/post6.jpeg',
    '/stories/post7.jpeg',
    '/stories/post8.jpeg',
    '/stories/post9.jpeg',
    '/stories/post10.jpeg',
    '/stories/post11.jpeg',
    '/stories/post12.jpeg',
    '/stories/post13.jpeg',
    '/stories/post14.jpeg',
    '/stories/post15.jpeg',
    '/stories/post16.jpeg',
    '/stories/post17.jpeg',
    '/stories/post18.jpeg',
    '/stories/post19.jpeg',
    '/stories/post20.jpeg',
    '/stories/post21.jpeg',
    '/stories/post22.jpeg',
    '/stories/post23.jpeg',
    '/stories/post24.jpeg',
    '/stories/post25.jpeg',
    '/stories/post26.jpeg',
  ]

    const [currentStory, setCurrentStory] = useState(0)
    const [paused, setPaused] = useState(false)
    const [showIcon, setShowIcon] = useState(false)
    const [message, setMessage] = useState('')
    
    const sendMessage = () => {
  if (!message.trim()) return

  const phone = "556196701233"
  const text = encodeURIComponent(message)

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank')

  setMessage(' ')
}
    

  /* AUTO PLAY */
      useEffect(() => {

  if (paused) return

  const interval = setInterval(() => {

    setCurrentStory((prev) =>
      prev === stories.length - 1
        ? 0
        : prev + 1
    )

  }, 6000)

  return () => clearInterval(interval)

}, [paused, stories.length])   
  /* PRÓXIMO */
  const nextStory = () => {

    setCurrentStory((prev) =>
      prev === stories.length - 1
        ? 0
        : prev + 1
    )

  }

  /* ANTERIOR */
  const prevStory = () => {

    setCurrentStory((prev) =>
      prev === 0
        ? stories.length - 1
        : prev - 1
    )

  }
  const togglePause = () => {

  setPaused((prev) => !prev)

  setShowIcon(true)

  setTimeout(() => {
    setShowIcon(false)
  }, 800)

}

  return (

    <section
      className="
        relative
        w-full
        bg-[#f5f3ee]
        py-24
        overflow-hidden
      "
    >

      {/* TÍTULO */}
      <div className="text-center mb-16 px-6 relative z-20">

        {/* BADGE (STORIES) */}
                <div
            className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-black/10
                border
                border-black/10
                backdrop-blur-md
                px-10
                py-5
                rounded-full
                mb-6
                shadow-lg
            "
            >
            <span
                className="
                text-base
                md:text-lg
                tracking-[0.35em]
                uppercase
                text-orange-500
                font-semibold
                "
            >
                Stories
            </span>
            </div>

        {/* TÍTULO */}
        <h2
            className="
            handmade-title-light
            text-6xl
            sm:text-7xl
            md:text-8xl
            mb-8
            "
        >
            Promoções & Novidades
        </h2>

        </div>

      {/* CONTAINER */}
      <div
        className="
          relative
          flex
          justify-center
          items-center
          z-20
          group/story
        "
      >

        {/* FUNDO ESCURO */}
        <div
          className="
            fixed
            inset-0
            bg-black/0 
            opacity-0 
            group-hover/story:bg-black/70
            group-hover/story:opacity-100 
            backdrop-blur-[3px] 
            transition-all 
            duration-500 
            pointer-events-none 
            z-10
            "
        ></div>

        {/* CELULAR */}
        <div
          className="
            relative
            z-20
            group
            w-[360px]
            sm:w-[390px]
            md:w-[430px]
            h-[760px]
            rounded-[48px]
            bg-black
            p-[10px]
            shadow-[0_30px_80px_rgba(0,0,0,0.40)]
            transition-all
            duration-500
            hover:scale-[1.06]
            hover:-translate-y-2
          "
        >

          {/* CAMERA */}
          <div
            className="
              absolute
              top-4
              left-1/2
              -translate-x-1/2
              w-32
              h-7
              rounded-full
              bg-black
              z-30
              border
              border-white/10
            "
          ></div>

          {/* TIMER */}
          <div
            className="
              absolute
              top-12
              left-6
              right-6
              z-30
            "
          >

            <div
              className="
                h-1.5
                bg-white/30
                rounded-full
                overflow-hidden
              "
            >

              <div
                    key={`${currentStory}-${paused}`}
                    className={`
                    h-full
                    bg-white
                    ${paused ? 'w-full' : 'animate-[story_6s_linear]'}
                `}
                />

            </div>

          </div>

          {/* SETA ESQUERDA */}
          <button
            onClick={prevStory}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              z-40
              w-12
              h-12
              rounded-full
              bg-black/40
              backdrop-blur-md
              border
              border-white/10
              shadow-2xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/70
            "
          >

            <ChevronLeft
              size={28}
              className="text-white"
            />

          </button>

          {/* SETA DIREITA */}
          <button
            onClick={nextStory}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              z-40
              w-12
              h-12
              rounded-full
              bg-black/40
              backdrop-blur-md
              border
              border-white/10
              shadow-2xl
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-110
              hover:bg-black/70
            "
          >

            <ChevronRight
              size={28}
              className="text-white"
            />

          </button>
          

          {/* IMAGEM */}
          <div
                onClick={togglePause}
                className="
                relative
                w-full
                h-[calc(100%-80px)]
                rounded-[38px]
                overflow-hidden
                bg-black
                cursor-pointer
                "
                >
                    {/* PLAY / PAUSE ICON */}
                    <div
                    className={`
                        absolute
                        inset-0
                        z-40
                        flex
                        items-center
                        justify-center
                        pointer-events-none
                        transition-all
                        duration-300
                        ${
                        showIcon
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-75'
                        }
                    `}
                    >

                    <div
                        className="
                        w-24
                        h-24
                        rounded-full
                        bg-black/45
                        backdrop-blur-md
                        flex
                        items-center
                        justify-center
                        border
                        border-white/20
                        shadow-2xl
                        "
                    >

                        {paused ? (
                        <Play
                            size={42}
                            className="text-white ml-1"
                            fill="white"
                        />
                        ) : (
                        <Pause
                            size={42}
                            className="text-white"
                            fill="white"
                        />
                        )}

                    </div>

                    </div>

            <img
              src={stories[currentStory]}
              alt="Story"
              className="
                w-full
                h-full
                object-contain
                bg-black
                transition-all
                duration-700
                group-hover:scale-[1.02]
              "
            />

            {/* OVERLAY */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/25
                via-transparent
                to-black/10
              "
            ></div>

            {/* CAIXA DE MENSAGEM (WHATSAPP STYLE) */}
                <div
                className="
                    absolute
                    bottom-4
                    left-4
                    right-4
                    z-50
                    flex
                    items-center
                    gap-2
                    bg-black/60
                    backdrop-blur-md
                    border
                    border-white/10
                    rounded-full
                    px-4
                    py-3
                "
                >

                <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" Faça seu pedido Agora!!"
                    className="
                    flex-1
                    bg-transparent
                    outline-none
                    text-white
                    placeholder-white/50
                    text-sm
                    "
                />

                <button
                    onClick={sendMessage}
                    className="
                    w-10
                    h-10
                    flex
                    items-center
                    justify-center
                    rounded-full
                    bg-green-500
                    hover:bg-green-600
                    transition
                    "
                >
                    <ChevronRight size={20} className="text-white" />
                </button>

                </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default StoriesSection