import { MessageCircle } from 'lucide-react'

function ProductCard({ product }) {
  const message = `Olá! Tenho interesse no produto ${product.name}.`

  return (
    <div
      className="
        w-full
        max-w-[340px]
        bg-white
        rounded-[30px]
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        transition-shadow
        duration-300
        hover:-translate-y-2
        flex
        flex-col
      "
    >

      {/* IMAGEM */}
      <div className="h-64 overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="
            w-full
            h-full
            object-cover
            hover:shadow-2xl
            transition
            duration-500
          "
        />

      </div>

      {/* CONTEÚDO */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-2xl font-bold text-green-900 mb-3">
          {product.name}
        </h3>

        <p
          className="
            text-gray-600
            leading-relaxed
            mb-6
            flex-1
          "
        >
          {product.description}
        </p>

        <a
          href={`https://wa.me/556196701233?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            bg-orange-400
            hover:bg-orange-500
            text-white
            px-5
            py-3
            rounded-xl
            font-semibold
            transition
            w-full
          "
        >
          <MessageCircle size={20} />
          Consultar
        </a>

      </div>
    </div>
  )
}

export default ProductCard