export default function Timeline(){
  const steps = [
    { t: "Selezione", d: "Ricerca diretta nelle cave e nei mercati, con criteri gemmologici." },
    { t: "Pulizia", d: "Trattamenti delicati per preservare le superfici naturali." },
    { t: "Catalogazione", d: "Schede tecniche con provenienza, durezza, inclusioni note." },
    { t: "Esposizione", d: "Allestimenti modulari e fotografia macro per la vendita." }
  ];
  return (
    <div className="relative">
      <ol className="space-y-6">
        {steps.map((s, i) => (
          <li key={i} className="grid md:grid-cols-5 gap-4 items-start">
            <div className="md:col-span-1">
              <div className="h-10 w-10 rounded-full bg-brand-500/30 border border-brand-500/50 grid place-items-center">{i+1}</div>
            </div>
            <div className="md:col-span-4">
              <h4 className="font-medium">{s.t}</h4>
              <p className="text-white/75">{s.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
