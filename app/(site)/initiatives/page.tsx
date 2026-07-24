"use client";
import Image from "next/image";
import Link from "next/link";
import {
  FaGraduationCap,
  FaHeartbeat,
  FaHandsHelping,
  FaTheaterMasks,
  FaSeedling,
  FaSearch,
  FaArrowRight,
  FaPlay,
  FaUsers,
  FaCalendarAlt,
  FaStar,
  FaHandHoldingHeart,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "motion/react";
import StatBar from "@/components/StatBar";

const initiatives = [
  {
    icon: FaGraduationCap,
    title: "Value-Based Education & Digital Literacy",
    color: "text-forest bg-forest/10",
    desc: "To advocate for value-based education that builds integrity over commercialism, and run youth-led digital literacy initiatives empowering senior citizens with smartphone operations and cyber safety.",
  },
  {
    icon: FaHeartbeat,
    title: "Healthcare & Digital Health Awareness",
    color: "text-maroon bg-maroon/10",
    desc: "To organize medical check-up drives and assist community members—especially elderly residents—in adopting digital health management applications and wellness tools.",
  },
  {
    icon: FaHandsHelping,
    title: "Social Welfare & Community Support",
    color: "text-gold bg-gold/10",
    desc: "To support senior citizens, families, and underprivileged sections through essential aid, Bhog Prasadi distribution during festivals, and fostering inter-community harmony.",
  },
  {
    icon: FaTheaterMasks,
    title: "Cultural Heritage, Arts & Festivals",
    color: "text-blue-700 bg-blue-100",
    desc: "To promote and preserve Bengali heritage, literature, and art by organizing traditional festivals like Durga Puja, Jagannath Rath Yatra, Poila Boishakh, Saraswati Puja, and Phag Utsav.",
  },
  {
    icon: FaSeedling,
    title: "Women Empowerment & Youth Mobilization",
    color: "text-forest bg-forest/10",
    desc: "To highlight female empowerment ('Nari Shakti') through drama, cultural leadership, and active involvement of youth as community mentors and digital trainers.",
  },
  {
    icon: FaSearch,
    title: "Seminars, Commemorations & Civic Dialogue",
    color: "text-maroon bg-maroon/10",
    desc: "To host cultural seminars, state foundation day celebrations, and public discussion forums that celebrate national history and foster social unity.",
  },
];

const stats = [
  { icon: FaUsers, value: "6+", label: "Active Members" },
  { icon: FaCalendarAlt, value: "7+", label: "Years of Service" },
  { icon: FaHandHoldingHeart, value: "100+", label: "Community Events" },
  { icon: FaHandHoldingHeart, value: "100+", label: "Welfare Initiatives" },
  { icon: FaMapMarkerAlt, value: "Across India", label: "Serving Communities" },
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

export default function InitiativesPage() {
  return (
    <div>
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 py-16"
      >
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-start">
          <motion.div
            variants={fadeLeft}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="section-eyebrow">Our Initiatives</span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-4 text-ink leading-tight">
              Our Initiatives.{" "}
              <span className="text-maroon">Changing Lives.</span>
            </h1>
            <p className="text-ink/60 mt-5 leading-relaxed">
              In accordance with our Trust Deed, we undertake a wide range of
              charitable activities for the benefit of society irrespective
              of caste, creed, religion, language or gender.
            </p>
            <div className="flex flex-wrap gap-4 mt-7">
              <Link href="/programs" className="btn-primary">
                <FaUsers size={14} /> Explore All Initiatives
              </Link>
              <Link href="/gallery" className="btn-outline">
                <FaPlay size={12} /> Our Journey
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              
              transition={{ duration: 0.3 }}
              className="relative row-span-2 rounded-2xl overflow-hidden shadow-md card-hover"
            >
              <Image
                src="/images/classroom-girl.jpg"
                alt="Students learning in a classroom"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-forest/95 text-white p-4">
                <p className="font-serif font-semibold text-sm">
                  Every Initiative Creates Impact
                </p>
                <p className="text-xs text-white/70 mt-1">
                  Built on compassion. Driven by purpose.
                </p>
              </div>
            </motion.div>
            <motion.div
              
              transition={{ duration: 0.3 }}
              className="relative h-32 rounded-2xl overflow-hidden shadow-md card-hover"
            >
              <Image
                src="/images/doctor-elderly.jpg"
                alt="Doctor caring for an elderly patient"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
            <motion.div
              
              transition={{ duration: 0.3 }}
              className="relative h-32 rounded-2xl overflow-hidden shadow-md card-hover"
            >
              <Image
                src="/images/dance-performance.jpg"
                alt="Cultural dance performance"
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Initiatives grid + stats — also full viewport */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-screen flex flex-col justify-center max-w-7xl mx-auto px-6 pb-16"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {initiatives.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              
              className="bg-white rounded-2xl p-6 border border-gold-light/20 shadow-sm card-hover"
            >
              <span
                className={`w-11 h-11 rounded-full flex items-center justify-center mb-4 ${it.color}`}
              >
                <it.icon size={17} />
              </span>
              <h3 className="font-serif font-semibold text-ink mb-2">
                {it.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">{it.desc}</p>
              <Link
                href="/programs"
                className="text-maroon text-sm font-semibold flex items-center gap-1.5 mt-4 transition-transform hover:translate-x-1"
              >
                Learn More <FaArrowRight size={11} />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mt-14"
        >
          <StatBar stats={stats} />
        </motion.div>
      </motion.section>
    </div>
  );
}