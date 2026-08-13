import { X } from "lucide-react";
import { useState } from "react";

function Gallery() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const galleryImages = [
        "https://via.placeholder.com/600x338?text=Project+View+1",
        "https://via.placeholder.com/600x338?text=Project+View+2",
        "https://via.placeholder.com/600x338?text=Project+View+3",
        "https://via.placeholder.com/600x338?text=Project+View+4",
        "https://via.placeholder.com/600x338?text=Project+View+5",
        "https://via.placeholder.com/600x338?text=Project+View+6",
        "https://via.placeholder.com/600x338?text=Project+View+7",
        "https://via.placeholder.com/600x338?text=Project+View+8",
    ];

    return (
        <section className="px-7.5">
            <div className="py-16">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold">Gallery</h2>
                    <p className="mt-2 text-gray-600">Explore our project through stunning visuals</p>
                </div>

                {/* Gallery Grid - 2 columns on mobile, 4 on desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="rounded-lg overflow-hidden bg-gray-100 cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-auto aspect-video object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="flex justify-center">
                    <a
                        href="#enquire"
                        className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-sm font-medium text-white transition-opacity hover:opacity-80"
                    >
                        View More
                    </a>
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <div
                        className="relative max-w-4xl w-full max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Expanded view"
                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                        />

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                        >
                            <X className="w-6 h-6 text-black" />
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Gallery;