import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProductCard from "@/components/ProductCard";
import Timeline from "@/components/Timeline";

const products = [
  { title: "Ametista Geode", subtitle: "Uruguay", mediaSrc: "/hero.jpg" },
  { title: "Quarzo Ialino", subtitle: "Madagascar", mediaSrc: "/hero.jpg" },
  { title: "Tormalina Nera", subtitle: "Brasile", mediaSrc: "/hero.jpg" },
  { title: "Calcite Ottica", subtitle: "Islanda", mediaSrc: "/hero.jpg" },
  { title: "Malachite", subtitle: "RDC", mediaSrc: "/hero.jpg" },
  { title: "Lapislazzuli", subtitle: "Afghanistan", mediaSrc: "/hero.jpg" },
];

export default function Page(){
  return (
    <main>
      <Nav />
      <Hero />
      <Section id="about" title="Materiale, luce, storia" kicker="Manifesto">
        <div className="max-w-3xl text-white/80 leading-relaxed">
          <p>
            Questo template replica il concept “Manus-style”: una pagina scorrevole, visuale, con
            tipografia ampia, transizioni morbide e focus su immagini full-bleed. Ideale per una
            vetrina editoriale/artistica o un catalogo curato.
          </p>
        </div>
      </Section>
      <Section id="collection" title="Collezione">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => <ProductCard key={i} {...p} />)}
        </div>
      </Section>
      <Section id="process" title="Dalla cava alla vetrina">
        <Timeline />
      </Section>
      <Section id="contact" title="Contatti & Richieste">
        <div className="grid md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <div>
              <label className="text-sm text-white/70">Nome</label>
              <input className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-brand-400" placeholder="Gio" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 outline-none focus:border-brand-400" placeholder="tu@dominio.it" />
            </div>
            <div>
              <label className="text-sm text-white/70">Messaggio</label>
              <textarea className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 h-28 outline-none focus:border-brand-400" placeholder="Descrivi cosa cerchi..." />
            </div>
            <button className="px-5 py-2.5 rounded-full bg-white text-black hover:opacity-90">Invia</button>
          </form>
          <div className="text-white/80">
            <p className="mb-4">Preferisci parlare al volo?</p>
            <a href="https://wa.me/391234567890" className="inline-block px-5 py-2.5 rounded-full bg-brand-500 hover:bg-brand-400">Scrivimi su WhatsApp</a>
            <div className="mt-8 text-sm text-white/60">
              <p>Disponibile per esposizioni, forniture B2B, consulenze gemmologiche e allestimenti temporanei.</p>
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
