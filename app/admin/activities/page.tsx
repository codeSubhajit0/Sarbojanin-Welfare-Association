"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaBold,
  FaItalic,
  FaListUl,
  FaLink,
  FaCloudUploadAlt,
  FaPlay,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

export default function CreateActivityPage() {
  const [active, setActive] = useState(true);
  const [tags, setTags] = useState(["Community", "Monthly"]);
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    const value = tagInput.trim();
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
    }
    setTagInput("");
  };

  const removeTag = (t: string) => setTags(tags.filter((tag) => tag !== t));

  const gallery = [
    "/images/hands-together.jpg",
    "/images/doctor-elderly.jpg",
  ];

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

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="max-w-5xl"
    >
      <motion.div variants={fadeUp} transition={{ duration: 0.4, ease: "easeOut" }}>
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm text-maroon font-medium mb-4 hover:underline group"
        >
          <FaArrowLeft size={11} className="transition-transform group-hover:-translate-x-1" />
          Back to Content
        </Link>
      </motion.div>

      <motion.div
        variants={fadeUp}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="font-serif text-2xl font-bold text-ink">
            Create Ongoing Activity
          </h1>
          <p className="text-sm text-ink/50 mt-1">
            Design and publish recurring community welfare programs with ease.
          </p>
        </div>
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary text-sm whitespace-nowrap"
          >
            Post Activity
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="btn-outline text-sm whitespace-nowrap"
          >
            Cancel
          </motion.button>
        </div>
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-xl border border-ink/5 p-6 card-hover"
          >
            <h2 className="font-serif font-semibold text-ink mb-5">
              Activity Details
            </h2>

            <label className="text-sm font-medium text-ink/70">
              Activity Name <span className="text-maroon">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g., Weekly Health Clinic"
              className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors"
            />

            <div className="grid sm:grid-cols-2 gap-4 mt-5">
              <div>
                <label className="text-sm font-medium text-ink/70">
                  Start Date / Commences
                </label>
                <input
                  type="date"
                  className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-ink/70">
                  Schedule Description
                </label>
                <input
                  type="text"
                  placeholder="e.g., Every Sunday, 10 AM"
                  className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors"
                />
              </div>
            </div>

            <label className="text-sm font-medium text-ink/70 mt-5 block">
              Detailed Description <span className="text-maroon">*</span>
            </label>
            <div className="mt-1.5 rounded-lg border border-ink/10 overflow-hidden">
              <div className="flex items-center gap-3 px-3 py-2 bg-[#f7f4f1] border-b border-ink/10 text-ink/50">
                <FaBold size={12} className="cursor-pointer hover:text-maroon transition-colors" />
                <FaItalic size={12} className="cursor-pointer hover:text-maroon transition-colors" />
                <FaListUl size={12} className="cursor-pointer hover:text-maroon transition-colors" />
                <FaLink size={12} className="cursor-pointer hover:text-maroon transition-colors" />
              </div>
              <textarea
                rows={6}
                placeholder="Describe the mission and execution of this activity..."
                className="w-full px-4 py-3 text-sm outline-none resize-none"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-xl border border-ink/5 p-6 card-hover"
          >
            <h2 className="font-serif font-semibold text-ink mb-5">
              Media Gallery
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              <motion.label
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="aspect-square rounded-lg border-2 border-dashed border-ink/15 flex flex-col items-center justify-center text-ink/40 cursor-pointer hover:border-maroon hover:text-maroon transition-colors"
              >
                <FaCloudUploadAlt size={20} />
                <span className="text-[11px] mt-1.5">Add Image</span>
                <input type="file" className="hidden" />
              </motion.label>
              {gallery.map((src) => (
                <motion.div
                  key={src}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="aspect-square rounded-lg bg-cover bg-center shadow-sm"
                  style={{ backgroundImage: `url(${src})` }}
                />
              ))}
              <div className="aspect-square rounded-lg border-2 border-dashed border-ink/10" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-xl border border-ink/5 p-6 card-hover"
          >
            <h2 className="font-serif font-semibold text-ink mb-5">
              Video Feature
            </h2>
            <label className="text-sm font-medium text-ink/70">
              Video URL (YouTube / Vimeo)
            </label>
            <input
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors"
            />
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="mt-4 aspect-video rounded-lg bg-[#f7f4f1] border border-ink/10 flex flex-col items-center justify-center text-ink/35"
            >
              <span className="w-12 h-12 rounded-full border-2 border-ink/20 flex items-center justify-center mb-2">
                <FaPlay size={14} className="ml-0.5" />
              </span>
              <p className="text-xs">Link a video to see preview</p>
            </motion.div>
          </motion.div>
        </div>

        <div className="space-y-6">
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-xl border border-ink/5 p-6 card-hover"
          >
            <h2 className="font-serif font-semibold text-ink mb-5">
              Configuration
            </h2>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-ink/70">Active Status</p>
                <p className="text-[11px] text-ink/40">Currently taking place</p>
              </div>
              <button
                onClick={() => setActive(!active)}
                aria-pressed={active}
                aria-label="Toggle active status"
                className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-colors ${
                  active ? "bg-maroon justify-end" : "bg-ink/15 justify-start"
                }`}
              >
                <motion.span
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="w-5 h-5 rounded-full bg-white shadow"
                />
              </button>
            </div>

            <label className="text-sm font-medium text-ink/70 mt-5 block">
              Category
            </label>
            <select className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors">
              <option>Healthcare & Camps</option>
              <option>Education & Scholarships</option>
              <option>Culture & Community</option>
              <option>Social Development</option>
            </select>

            <label className="text-sm font-medium text-ink/70 mt-5 block">
              Tags
            </label>
            <div className="mt-1.5 flex flex-wrap items-center gap-2 rounded-lg border border-ink/10 bg-[#f7f4f1] px-3 py-2.5">
              <AnimatePresence initial={false}>
                {tags.map((t) => (
                  <motion.span
                    key={t}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="inline-flex items-center gap-1.5 bg-maroon/10 text-maroon text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {t}
                    <button onClick={() => removeTag(t)} aria-label={`Remove ${t}`}>
                      <FaTimes size={9} />
                    </button>
                  </motion.span>
                ))}
              </AnimatePresence>
              <input
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                placeholder="Add tag..."
                className="flex-1 min-w-[70px] bg-transparent text-sm outline-none"
              />
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-white rounded-xl border border-ink/5 p-6 card-hover"
          >
            <h2 className="font-serif font-semibold text-ink mb-5">
              Activity Lead
            </h2>

            <label className="text-sm font-medium text-ink/70">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Name of coordinator"
              className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors"
            />

            <label className="text-sm font-medium text-ink/70 mt-5 block">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="+91 00000 00000"
              className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon transition-colors"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}