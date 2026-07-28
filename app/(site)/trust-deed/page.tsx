"use client";
import {
  FaFileContract,
  FaGraduationCap,
  FaStethoscope,
  FaHandHoldingHeart,
  FaTheaterMasks,
  FaUsers,
  FaSeedling,
  FaHandsHelping,
  FaSearch,
  FaShieldAlt,
  FaBalanceScale,
} from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

import {clauses} from "@/constants/constants"

import {fadeUp, fadeLeft, staggerContainer} from "@/constants/animation"


export default function TrustDeedPage() {
  return (
    <div>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 py-16"
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.7, ease: "easeOut" }} className="text-center mb-12">
          <span className="section-eyebrow">
            <FaFileContract className="inline mr-1" size={11} /> Legal Foundation
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-4 text-ink">
            Our Trust Deed
          </h1>
          <p className="text-ink/60 mt-4 max-w-2xl mx-auto">
            Sarbojonin Welfare Association is a registered charitable trust,
            formed for charitable purposes only, established in 2019. All
            activities are undertaken for the benefit of society irrespective
            of caste, creed, religion, language or gender.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          
          className="bg-forest text-white rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center gap-6 card-hover"
        >
          <span className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0">
            <FaShieldAlt className="text-gold" size={24} />
          </span>
          <div>
            <h2 className="font-serif text-lg font-semibold">Our Commitment. Our Responsibility.</h2>
            <p className="text-sm text-white/75 mt-1">
              All our activities are undertaken for the benefit of society
              irrespective of caste, creed, religion, language or gender as
              stated in our Trust Deed.
            </p>
          </div>
        </motion.div>
      </motion.section>

      {/* Objects of the Trust — also full viewport */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pb-20"
      >
        <motion.h2
          variants={fadeLeft}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-2xl font-bold text-ink mb-6 flex items-center gap-3"
        >
          <FaBalanceScale className="text-maroon" size={20} /> Objects of the Trust
        </motion.h2>

        <div className="space-y-4">
          <AnimatePresence initial={false}>
          {clauses.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              
              className="bg-white rounded-xl border border-gold-light/20 p-6 flex gap-5 card-hover"
            >
              <span className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-maroon shrink-0 font-serif font-semibold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-serif font-semibold text-ink flex items-center gap-2">
                  <c.icon className="text-forest" size={15} /> {c.title}
                </h3>
                <p className="text-sm text-ink/60 mt-1.5 leading-relaxed">{c.text}</p>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
        </div>
      </motion.section>
    </div>
  );
}