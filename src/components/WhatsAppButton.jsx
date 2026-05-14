import { FaWhatsapp } from 'react-icons/fa'

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/556196701233"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        bg-green-500
        hover:bg-green-600
        text-white
        p-4
        rounded-full
        shadow-xl
        z-50

        transition-all
        duration-300

        hover:scale-110
        hover:-translate-y-1
        hover:shadow-green-400/50
        hover:shadow-2xl

        active:scale-95

        animate-bounce
      "
    >
      <FaWhatsapp
        size={34}
        className="
          transition-transform
          duration-300
          group-hover:rotate-12
        "
      />
    </a>
  )
}

export default WhatsAppButton