import { FaInstagram } from 'react-icons/fa'

function SocialSection() {
  const posts = [
    {
      image: '/instagram/post1.png',
      link: 'https://www.instagram.com/p/DYfMoYXu5by/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },

    {
      image: '/instagram/post2.png',
      link: 'https://www.instagram.com/p/DYfG3ZwuUUx/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },

    {
      image: '/instagram/post3.png',
      link: 'https://www.instagram.com/reel/DXo9hJYDsyj/?igsh=OGhjeGgyYmhvMW85',
    },

    {
      image: '/instagram/post4.png',
      link: 'https://www.instagram.com/reel/DXhWr-RDviq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    

  ]

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-green-800 mb-4">
            Siga nossas redes
          </h2>

          <a
            href="https://www.instagram.com/naturalmente_verdebraz/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-3
              text-lg
              text-gray-600
              hover:text-green-700
              transition-all
              duration-300
              hover:scale-105
            "
          >
            <FaInstagram size={22} />

            <span>
              @naturalmente_verdebraz
            </span>
          </a>

        </div>

        {/* POSTS */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-8
            place-items-center
          "
        >

          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                w-fit
                bg-[#f8f8f8]
                rounded-[28px]
                shadow-lg
                overflow-hidden
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
              "
            >

              <div
                className="
                  max-h-[420px]
                  flex
                  items-center
                  justify-center
                  p-4
                  overflow-hidden
                "
              >

                <img
                  src={post.image}
                  alt="Instagram Naturalmente Verde"
                  className="
                    max-h-full
                    w-auto
                    object-contain
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:brightness-110
                  "
                />

              </div>
            </a>
          ))}

        </div>
      </div>
    </section>
  )
}

export default SocialSection