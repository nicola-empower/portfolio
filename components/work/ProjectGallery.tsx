"use client";

import { useState } from "react";
import Image from "next/image";
import ImageModal from "@/components/ui/ImageModal";
import FadeIn from "@/components/ui/FadeIn";
import { Maximize2, Camera } from "lucide-react";

interface ProjectGalleryProps {
  thumbnail: string;
  gallery?: string[];
  title: string;
}

export function ProjectGallery({ thumbnail, gallery = [], title }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Combine thumbnail and gallery for the modal
  const allImages = [thumbnail, ...gallery].filter(img => img && !img.includes("placeholder"));

  const handleImageClick = (src: string) => {
    const index = allImages.indexOf(src);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <div className="space-y-16">
        {/* Hero Image */}
        <FadeIn delay={0.3} y={40}>
          <div 
            className="group relative aspect-video w-full rounded-3xl overflow-hidden shadow-2xl shadow-charcoal/10 border border-charcoal/5 dark:border-white/5 bg-taupe/10 cursor-zoom-in"
            onClick={() => handleImageClick(thumbnail)}
          >
            {thumbnail && !thumbnail.includes("placeholder") ? (
              <>
                <Image
                  src={thumbnail}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors flex items-center justify-center">
                  <Maximize2 className="text-white opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300" size={48} />
                </div>
              </>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center text-charcoal/20">
                    <Camera size={64} />
                </div>
            )}
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        {gallery && gallery.length > 0 && (
          <div className="space-y-10 pt-12 border-t border-charcoal/5 dark:border-white/5">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-3xl font-bold text-charcoal dark:text-cream">Design Showcase</h3>
              <span className="text-sm font-bold uppercase tracking-widest text-charcoal/40 dark:text-cream/40 px-4 py-1 rounded-full bg-charcoal/5 dark:bg-white/5 border border-charcoal/5 dark:border-white/5">
                {gallery.length} Images
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {gallery.map((img, idx) => (
                <FadeIn key={idx} delay={0.1 * idx} y={20}>
                  <div 
                    className="group relative aspect-4/3 rounded-2xl overflow-hidden border border-charcoal/5 dark:border-white/5 bg-taupe/10 hover:shadow-xl transition-all duration-500 cursor-zoom-in"
                    onClick={() => handleImageClick(img)}
                  >
                    <Image
                      src={img}
                      alt={`${title} gallery image ${idx + 1}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors flex items-center justify-center">
                      <Maximize2 className="text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300" size={32} />
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>

      <ImageModal
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        images={allImages}
        initialIndex={selectedIndex ?? 0}
        alt={title}
      />
    </>
  );
}
