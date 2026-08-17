import { X, Expand } from "lucide-react";
import { useState } from "react";
import { motion, type Variants } from "motion/react";
import gallery1 from "../../assets/images/gallery1.png";
import gallery2 from "../../assets/images/gallery2.png";
import gallery3 from "../../assets/images/gallery3.png";
import gallery4 from "../../assets/images/gallery4.png";
import gallery5 from "../../assets/images/gallery5.png";
import gallery6 from "../../assets/images/gallery6.png";
import gallery7 from "../../assets/images/gallery7.png";
import gallery8 from "../../assets/images/gallery8.png";

// Bento sizing only kicks in at md: and up. On mobile every tile stays 1x1
// inside a plain 2-column grid, since a true bento layout needs more width
// than a phone screen to read cleanly.
const bentoSpans = [
    "md:col-span-2 md:row-span-2", // 1 - large anchor tile
    "",                             // 2
    "",                             // 3
    "",                             // 4
    "",                             // 5
    "md:col-span-2",               // 6 - wide tile
    "",                             // 7
    "",                             // 8
];

const gridVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const tileVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryImages = [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8,
    ];

    return (
        <section id="gallery" className="px-4 sm:px-6 md:px-12 lg:px-16">
            <div className="py-6 sm:py-8 md:py-10">
                {/* Header - black band, border beam, viewfinder-corner SVG pattern, green accent */}
                <div className="relative mb-10 overflow-hidden rounded-2xl bg-black px-6 py-12 text-center sm:mb-12 sm:px-10 sm:py-16">
                    {/* Border beam */}
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-2xl">
                        <div
                            className="absolute inset-[-50%] animate-[spin_6s_linear_infinite]"
                            style={{
                                background:
                                    "conic-gradient(from 0deg, transparent 0%, rgba(34,197,94,0.15) 30%, rgba(34,197,94,0.55) 55%, rgba(34,197,94,1) 68%, rgba(34,197,94,0.55) 78%, rgba(34,197,94,0.15) 90%, transparent 100%)",
                            }}
                        />
                    </div>
                    <div className="absolute inset-[5px] z-[1] rounded-2xl bg-black" />

                    {/* Viewfinder corner-frame pattern */}
                    <svg
                        width="100%"
                        height="100%"
                        className="pointer-events-none absolute inset-0 z-[2] text-white"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="gallery-frame-pattern"
                                width="70"
                                height="70"
                                patternUnits="userSpaceOnUse"
                            >
                                <path
                                    d="M6 20 V6 H20 M50 6 H64 V20 M64 50 V64 H50 M20 64 H6 V50"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                    fill="none"
                                    opacity="0.25"
                                />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#gallery-frame-pattern)" />
                    </svg>

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold sm:text-4xl">
                            <span className="text-green-500">Gallery</span>{" "}
                            <span className="text-white">&amp; Walkthrough</span>
                        </h2>
                        <p className="mt-2 text-sm text-gray-300 sm:text-base">
                            Elevation views, sample flat photos, and a full walkthrough of the project
                        </p>
                    </div>
                </div>

                {/* Gallery Grid - 2-col uniform on mobile, bento (mixed tile sizes) from md up */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    variants={gridVariants}
                    className="mb-10 grid grid-cols-2 gap-4 sm:mb-12 md:grid-cols-4 md:auto-rows-[160px] lg:auto-rows-[180px]"
                >
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            variants={tileVariants}
                            className={`group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 ${bentoSpans[index]}`}
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="aspect-video h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 md:aspect-auto"
                            />

                            {/* Hover overlay with expand icon */}
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                                <div className="rounded-full bg-white/90 p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <Expand className="h-4 w-4 text-black" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* View More Button */}
                <div className="flex justify-center">
                    <a
                        href="#enquire"
                        className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-80 sm:px-8 sm:py-4"
                    >
                        View More
                    </a>
                </div>
            </div>

            {/* Lightbox Modal - unchanged, click-to-expand behavior kept exactly as is */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative flex max-h-[90vh] w-full max-w-4xl items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Expanded view"
                            className="h-auto max-h-[90vh] w-full rounded-lg object-contain"
                        />

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute right-4 top-4 rounded-full bg-white p-2 transition-colors hover:bg-gray-200"
                        >
                            <X className="h-6 w-6 text-black" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Gallery;