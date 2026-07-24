"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaPlus,
  FaRegFileAlt,
  FaRegEye,
  FaSearch,
  FaPen,
  FaBars, FaTimes,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

const stats = [
  {
    label: "Total Posts & Activities",
    value: "156",
    note: "+15 this month",
    noteColor: "text-forest",
    icon: FaRegFileAlt,
    accent: "border-t-4 border-t-maroon",
    iconBg: "bg-blue-50 text-blue-500",
  },
  {
    label: "Drafts",
    value: "8",
    note: "Requires review",
    noteColor: "text-ink/40",
    icon: FaRegFileAlt,
    accent: "border-t-4 border-t-forest",
    iconBg: "bg-amber-50 text-amber-600",
  },
  {
    label: "Total Views",
    value: "45.2K",
    note: "+5.4% from last week",
    noteColor: "text-forest",
    icon: FaRegEye,
    accent: "border-t-4 border-t-gold",
    iconBg: "bg-cream text-gold",
  },
];

const blogPosts = [
  {
    title: "Community Health Camp 2024",
    desc: "Annual medical checkup drive for the elderly.",
    category: "Health",
    status: "Published",
    date: "Oct 12, 2024",
  },
  {
    title: "Durga Puja Preparations",
    desc: "Volunteer schedules and cultural event planning.",
    category: "Culture",
    status: "Draft",
    date: "Oct 10, 2024",
  },
  {
    title: "Education Scholarship Recipients",
    desc: "Announcing this year's merit scholars.",
    category: "Education",
    status: "Published",
    date: "Oct 05, 2024",
  },
];

const activities = [
  {
    title: "Weekly Health Clinic",
    desc: "Free consultations for senior members every Sunday.",
    category: "Healthcare & Camps",
    status: "Published",
    date: "Ongoing",
  },
  {
    title: "Youth Leadership Workshop",
    desc: "Empowering the next generation with leadership skills.",
    category: "Culture & Community",
    status: "Published",
    date: "Dec 05, 2024",
  },
  {
    title: "Language Day Seminar",
    desc: "Scholarly discussion on Bengali literature.",
    category: "Education",
    status: "Draft",
    date: "Nov 12, 2024",
  },
];

const categoryColors: Record<string, string> = {
  Health: "bg-blue-50 text-blue-600",
  Culture: "bg-purple-50 text-purple-600",
  Education: "bg-emerald-50 text-emerald-600",
  "Healthcare & Camps": "bg-blue-50 text-blue-600",
  "Culture & Community": "bg-purple-50 text-purple-600",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

export default function AdminDashboardPage() {
  const [tab, setTab] = useState<"blog" | "activities">("blog");
  const rows = tab === "blog" ? blogPosts : activities;
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div variants={staggerContainer} initial="hidden" animate="visible">
      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center justify-between mb-8"
      >
        <h1 className="font-serif text-2xl font-bold text-ink">
          Content Management
        </h1>
        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Link href="/admin/blog" className=" btn-primary text-sm whitespace-nowrap">
            <FaPlus size={12} />
            Create New
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        className="grid sm:grid-cols-3 gap-5 mb-8"
      >
        {stats.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className={`bg-white rounded-xl border border-ink/5 ${s.accent} p-5 card-hover`}
          >
            <div className="flex items-start justify-between">
              <p className="text-sm text-ink/50">{s.label}</p>
              <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${s.iconBg}`}>
                <s.icon size={14} />
              </span>
            </div>
            <p className="font-serif text-3xl font-bold text-ink mt-3">
              {s.value}
            </p>
            <p className={`text-xs mt-1.5 font-medium ${s.noteColor}`}>
              {s.note}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="bg-white rounded-xl border border-ink/5 p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-6 border-b border-ink/10 -mb-px">
            {(["blog", "activities"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`relative pb-3 text-sm font-semibold transition-colors ${
                  tab === key ? "text-maroon" : "text-ink/40 hover:text-ink/70"
                }`}
              >
                {key === "blog" ? "Recent Blog Posts" : "Recent Activities"}
                {tab === key && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-0.5 bg-maroon"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            ))}
          </div>

          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/30" size={13} />
            <input
              type="text"
              placeholder="Search entries..."
              className="pl-9 pr-4 py-2 text-sm rounded-lg border border-ink/10 bg-[#f7f4f1] outline-none focus:border-maroon w-56 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="hidden md:block">
              <tr className="text-left text-ink/40 text-xs uppercase tracking-wide">
                <th className="pb-3 font-medium">Title</th>
                <th className="pb-3 font-medium">Category</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/5">
              <div className="md:hidden space-y-4">
  <AnimatePresence mode="wait">
    {rows.map((r, i) => (
      <motion.div
        key={`${tab}-${r.title}`}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 0.25,
          delay: i * 0.04,
        }}
        className="rounded-xl border border-ink/10 bg-white p-4"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-ink">
              {r.title}
            </h3>

            <p className="text-xs text-ink/40 mt-1">
              {r.desc}
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 rounded-lg hover:bg-cream text-maroon flex items-center justify-center"
          >
            <FaPen size={12} />
          </motion.button>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-ink/50">Category</span>

            <span
              className={`px-2 py-1 rounded-md text-xs font-medium ${
                categoryColors[r.category] ??
                "bg-ink/5 text-ink/60"
              }`}
            >
              {r.category}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-ink/50">Status</span>

            <span
              className={`inline-flex items-center gap-1 ${
                r.status === "Published"
                  ? "text-forest"
                  : "text-ink/40"
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  r.status === "Published"
                    ? "bg-forest"
                    : "bg-ink/30"
                }`}
              />
              {r.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-ink/50">Date</span>
            <span>{r.date}</span>
          </div>
        </div>
      </motion.div>
    ))}
  </AnimatePresence>
</div>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 mt-2 border-t border-ink/5">
          <p className="text-xs text-ink/40">
            Showing 1 to {rows.length} of 124 entries
          </p>
          <div className="flex items-center gap-1.5">
            <button
              className="w-8 h-8 rounded-lg border border-ink/10 text-ink/30 flex items-center justify-center"
              disabled
            >
              <FaChevronLeft size={11} />
            </button>
            {[1, 2, 3].map((n) => (
              <motion.button
                key={n}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className={`w-8 h-8 rounded-lg text-xs font-medium flex items-center justify-center ${
                  n === 1
                    ? "bg-forest text-white"
                    : "border border-ink/10 text-ink/60 hover:bg-cream"
                }`}
              >
                {n}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              className="w-8 h-8 rounded-lg border border-ink/10 text-ink/60 hover:bg-cream flex items-center justify-center"
            >
              <FaChevronRight size={11} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}