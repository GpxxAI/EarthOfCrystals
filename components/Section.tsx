import { ReactNode } from "react";

export default function Section({ id, title, kicker, children }: { id: string, title: string, kicker?: string, children: ReactNode }){
  return (
    <section id={id} className="relative py-20 md:py-28 border-t border-white/10">
      <div className="container">
        <div className="max-w-2xl">
          {kicker && <p className="uppercase tracking-widest text-xs text-white/50 mb-2">{kicker}</p>}
          <h2 className="text-3xl md:text-5xl font-semibold">{title}</h2>
        </div>
        <div className="mt-10">
          {children}
        </div>
      </div>
    </section>
  )
}
