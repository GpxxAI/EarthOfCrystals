import { ReactNode } from "react";

export default function ProductCard({ title, subtitle, mediaSrc }: { title: string, subtitle?: string, mediaSrc: string }){
  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
      <img src={mediaSrc} alt={title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
      <div className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-medium">{title}</h3>
          {subtitle && <p className="text-sm text-white/70">{subtitle}</p>}
        </div>
        <a className="text-sm underline decoration-dotted underline-offset-4" href="#contact">Info</a>
      </div>
    </article>
  )
}
