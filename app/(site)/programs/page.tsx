"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaHeartbeat,
  FaMusic,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { motion } from "motion/react";

const programs = [
  {
    id: "education",
    icon: FaBookOpen,
    title: "Education & Digital Literacy",
    color: "bg-forest",
    text: "text-forest",
    desc: "We promote value-based education emphasizing ethics over commercialization, while deploying youth volunteers to teach senior citizens smartphone operations, health apps, and cyber safety.",
    points: [
      "Value-based educational guidance & student support",
      "Youth-led digital literacy & smartphone workshops for elders",
      "Cybersecurity and digital financial safety awareness",
    ],
    image: "/images/event-bookst.png",
  },
  {
    id: "healthcare",
    icon: FaHeartbeat,
    title: "Healthcare & Welfare",
    color: "bg-maroon",
    text: "text-maroon",
    desc: "Our medical camps, health check-up drives, and winter relief initiatives bring essential health and wellness support to families, senior citizens, and underprivileged areas.",
    points: [
      "Medical check-up drives & health awareness sessions",
      "Winter sweater and warm clothing distribution",
      "First aid, CPR awareness, and emergency hospital assistance",
    ],
    image: "/images/event-clothes-health-drive.jpg",
  },
  {
    id: "culture",
    icon: FaMusic,
    title: "Culture & Community",
    color: "bg-gold",
    text: "text-gold",
    desc: "From traditional festivals to literary seminars, we organize cultural events that preserve Bengali heritage, enrich local talent, and foster unity across residential societies.",
    points: [
      "Festivals: Durga Puja, Rath Yatra, Poila Boishakh, Saraswati Puja & Phag Utsav",
      "West Bengal Foundation Day & cultural seminars",
      "Performing arts, dance dramas (e.g., Mahishasur Mardini), and music nights",
    ],
    image: "/images/event-durgapuja.png",
  },
  {
    id: "social",
    icon: FaUsers,
    title: "Social Development",
    color: "bg-blue-700",
    text: "text-blue-700",
    desc: "We empower women, youth, and marginalized communities through active social leadership, festival hospitality, and community bonding initiatives for inclusive growth.",
    points: [
      "Women empowerment ('Nari Shakti') & youth mentorship",
      "Community Bhog Prasadi meal distribution drives",
      "Inter-colony harmony, environmental awareness & civic welfare",
    ],
    image: "/images/women-empowerment.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerList = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0 },
};

export default function ProgramsPage() {
  return (
    <div>
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 pt-16 pb-8 text-center"
      >
        <span className="section-eyebrow">What We Do</span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-4 text-ink">
          Our Programs
        </h1>
        <p className="text-ink/60 mt-4 max-w-2xl mx-auto">
          Four pillars guide everything we do — education, healthcare,
          culture and social development — each built to create meaningful,
          lasting change.
        </p>
      </motion.section>

      {programs.map((p, i) => {
        const reversed = i % 2 === 1;
        return (
          <motion.section
            key={p.id}
            id={p.id}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-14 scroll-mt-24"
          >
            <div
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <motion.div
                variants={reversed ? fadeRight : fadeLeft}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative h-80 rounded-3xl overflow-hidden shadow-lg card-hover"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </motion.div>

              <motion.div
                variants={reversed ? fadeLeft : fadeRight}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              >
                <span
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${p.color} text-white`}
                >
                  <p.icon size={20} />
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  {p.title}
                </h2>
                <p className="text-ink/60 mt-4 leading-relaxed">{p.desc}</p>

                <motion.ul
                  variants={staggerList}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  className="mt-6 space-y-3"
                >
                  {p.points.map((pt) => (
                    <motion.li
                      key={pt}
                      variants={listItem}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="flex items-start gap-3 text-sm text-ink/70"
                    >
                      <FaCheckCircle
                        className={`${p.text} mt-0.5 shrink-0`}
                        size={15}
                      />
                      {pt}
                    </motion.li>
                  ))}
                </motion.ul>

                <Link
                  href="/contact"
                  className={`inline-flex items-center gap-2 font-semibold mt-6 ${p.text} transition-transform hover:translate-x-1`}
                >
                  Get Involved <FaArrowRight size={12} />
                </Link>
              </motion.div>
            </div>
          </motion.section>
        );
      })}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 pb-20"
      >
        <div className="bg-maroon rounded-2xl px-8 py-12 text-center text-white">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Want to support one of our programs?
          </h2>
          <p className="text-white/80 mt-3 max-w-xl mx-auto">
            Every contribution of time, skill or resources helps us reach
            more people across communities.
          </p>
          <Link href="/contact" className="btn-outline-light mt-6">
            <FaUsers size={14} /> Get Involved Today
          </Link>
        </div>
      </motion.section>
    </div>
  );
}