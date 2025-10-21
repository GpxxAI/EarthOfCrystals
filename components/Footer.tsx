export default function Footer(){
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <p>© {new Date().getFullYear()} Earth of Crystals. Tutti i diritti riservati.</p>
        <div className="flex items-center gap-5">
          <a href="mailto:info@earthofcrystals.example" className="hover:text-white">Email</a>
          <a href="https://wa.me/391234567890" className="hover:text-white">WhatsApp</a>
          <a href="https://instagram.com/" className="hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  )
}
