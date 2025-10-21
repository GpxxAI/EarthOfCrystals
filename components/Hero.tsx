"use client";
import { motion } from "framer-motion";

export default function Hero(){
  return (
    <section id="home" className="relative min-h-[95svh] flex items-center justify-center overflow-hidden">
      <img src="/hero.jpg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
      <div className="relative container text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight"
        >
          Pietre vive, forme pure
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .8 }}
          className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
        >
          Un’esperienza immersiva: artefatti minerali curati con rigore, raccontati con immagini e micro-interazioni.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .4 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a href="#collection" className="px-5 py-2.5 rounded-full bg-white text-black hover:opacity-90">Esplora</a>
          <a href="#contact" className="px-5 py-2.5 rounded-full border border-white/30 hover:border-white/60">Contatti</a>
        </motion.div>
      </div>
      <div className="grain absolute inset-0" />
    </section>
  )
}
