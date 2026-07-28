import Image from "next/image";
import { FaCamera } from "react-icons/fa";

const photos = [
  { src: "/images/event-durgapuja.png", alt: "Community medical camp and volunteers", span: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/event-digital-training.jpg.png", alt: "Students learning in a classroom" },
  { src: "/images/plantation-drive.png", alt: "Doctor caring for an elderly patient" },
  { src: "/images/event-road-safety-demo.jpg.png", alt: "Language day seminar" },
  { src: "/images/distinguished-assembly.png", alt: "Youth leadership workshop" },
  { src: "/images/hero-banner.png", alt: "Volunteers joining hands together" },

  { src: "/images/Diya_Aarti.jpeg", alt: "108 Diya Aarti" },
  { src: "/images/Drawing_Competition.jpeg", alt: "Drawing Competition" },
  { src: "/images/Gathering_for_Pushpanjali.jpeg", alt: "Gathering for Pushpanjali" },
  { src: "/images/Mahishasur_Mardani_by_members.jpeg", alt: "Mahishasur Mardani by members" },
  { src: "/images/Mahishasur_Mardani.jpeg", alt: "Mahishasur Mardani" },
  { src: "/images/Preparation_of_Sandhi_Puja.jpeg", alt: "Preparation of Sandhi Puja" },
  { src: "/images/Volunteers_after_visarjan.jpeg", alt: "Volunteers after visarjan" },
  { src: "/images/Volunteers_before_visarjan.jpeg", alt: "Volunteers after visarjan" },
 
 
];

export default function GalleryPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="section-eyebrow">
          <FaCamera className="inline mr-1" size={11} /> Gallery
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold mt-4 text-ink">
          Moments From Our Journey
        </h1>
        <p className="text-ink/60 mt-4">
          A glimpse into our events, camps, festivals and everyday work
          across the communities we serve.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 auto-rows-[160px] gap-4">
        {photos.map((p) => (
          <div key={p.src} className={`relative rounded-2xl overflow-hidden shadow-sm ${p.span ?? ""}`}>
            <Image
              src={p.src}
              alt={p.alt}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
