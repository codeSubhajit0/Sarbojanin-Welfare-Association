"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaBold,
  FaItalic,
  FaListUl,
  FaLink,
  FaImage,
  FaCloudUploadAlt,
  FaPlay,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const card: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.97,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function CreateBlogPage() {
  const [tags, setTags] = useState(["Festival"]);
  const [tagInput, setTagInput] = useState("");

  const addTag = () => {
    const value = tagInput.trim();
    if (value && !tags.includes(value)) {
      setTags([...tags, value]);
    }
    setTagInput("");
  };

  const removeTag = (t: string) => setTags(tags.filter((tag) => tag !== t));

  return (
    <motion.div
      className="max-w-5xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={fadeUp}>
        <Link
          href="/admin"
          className="inline-flex items-center gap-2 text-sm text-maroon font-medium mb-4 hover:underline"
        >
          <FaArrowLeft size={11} />
          Back to Blog
        </Link>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8"
      >
        <div>
          <h1 className="font-serif text-2xl font-bold text-ink">
            Create New Blog
          </h1>
          <p className="text-sm text-ink/50 mt-1">
            Design and publish community welfare programs with ease.
          </p>
        </div>
        <div className="flex flex-row md:flex-col gap-3 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-sm white whitespace-nowrap"
          >
            Post Blog
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-outline text-sm whitespace-nowrap"
          >
            Cancel
          </motion.button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <motion.div
  variants={fadeUp}
  className="order-2 lg:order-1 lg:col-span-2 space-y-4 sm:space-y-6"
>
          <motion.div
            variants={card}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-xl border border-ink/5 p-6"
          >
            <h2 className="font-serif font-semibold text-ink mb-5">
              Core Details
            </h2>

            <label className="text-sm font-medium text-ink/70">
              Blog Title <span className="text-maroon">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter a descriptive title"
              className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon"
            />

            <label className="text-sm font-medium text-ink/70 mt-5 block">
              Detailed Content <span className="text-maroon">*</span>
            </label>
            <div className="mt-1.5 rounded-lg border border-ink/10 overflow-hidden">
              <div className="flex items-center gap-3 px-3 py-2 bg-[#f7f4f1] border-b border-ink/10 text-ink/50">
                <FaBold
                  size={12}
                  className="cursor-pointer hover:text-maroon"
                />
                <FaItalic
                  size={12}
                  className="cursor-pointer hover:text-maroon"
                />
                <FaListUl
                  size={12}
                  className="cursor-pointer hover:text-maroon"
                />
                <FaLink
                  size={12}
                  className="cursor-pointer hover:text-maroon"
                />
                <FaImage
                  size={12}
                  className="cursor-pointer hover:text-maroon"
                />
              </div>
              <textarea
                rows={8}
                placeholder="Write the full story here..."
                className="w-full px-4 py-3 text-sm outline-none resize-none"
              />
            </div>
          </motion.div>

          <motion.div
            variants={card}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-xl border border-ink/5 p-6"
          >
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-serif font-semibold text-ink">
                Media Gallery
              </h2>
              <button className="text-xs font-medium text-maroon flex items-center gap-1.5 hover:underline">
                <FaImage size={11} /> Add Media
              </button>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
              <motion.label
                whileHover={{
                  scale: 1.05,
                  borderColor: "#8B2E2E",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="aspect-square rounded-lg border-2 border-dashed border-ink/15 flex flex-col items-center justify-center text-ink/40 cursor-pointer hover:border-maroon hover:text-maroon transition-colors"
              >
                <FaCloudUploadAlt size={20} />
                <span className="text-[11px] mt-1.5">Upload Image</span>
                <input type="file" className="hidden" />
              </motion.label>
              <motion.div
                whileHover={{
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="aspect-square rounded-lg bg-cover bg-center"
                style={{ backgroundImage: "url(/images/event-durgapuja.jpg)" }}
              />
            </div>

            <label className="text-sm font-medium text-ink/70 mt-6 block">
              Featured Video URL (Optional)
            </label>
            <div className="mt-1.5 flex gap-3">
              <input
                type="text"
                placeholder="https://youtube.com/..."
                className="flex-1 rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon"
              />
              {/* <button className="btn-outline text-sm shrink-0">Preview</button> */}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
            variants={card}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
        className="space-y-6">
          <div className="bg-white rounded-xl border border-ink/5 p-6">
            <h2 className="font-serif font-semibold text-ink mb-5">Settings</h2>

            <label className="text-sm font-medium text-ink/70">
              Publish Date
            </label>
            <input
              type="date"
              className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon"
            />

            <label className="text-sm font-medium text-ink/70 mt-5 block">
              Category <span className="text-maroon">*</span>
            </label>
            <select className="mt-1.5 w-full rounded-lg border border-ink/10 bg-[#f7f4f1] px-4 py-2.5 text-sm outline-none focus:border-maroon">
              <option>Select a category</option>
              <option>Education & Scholarships</option>
              <option>Healthcare & Welfare</option>
              <option>Culture & Community</option>
              <option>Social Development</option>
            </select>

            <label className="text-sm font-medium text-ink/70 mt-5 block">
              Tags
            </label>
            <AnimatePresence>
              {tags.map((t) => (
                <motion.span
                  key={t}
                  layout
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex items-center gap-1.5 bg-maroon/10 text-maroon text-xs font-medium px-2.5 py-1 rounded-full"
                >
                  {t}
                  <button onClick={() => removeTag(t)}>
                    <FaTimes size={9} />
                  </button>
                </motion.span>
              ))}
            </AnimatePresence>
            <p className="text-[11px] text-ink/35 mt-1.5">
              Press enter to add a tag.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
