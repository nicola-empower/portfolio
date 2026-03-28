"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex: number;
  alt: string;
}

export default function ImageModal({ isOpen, onClose, images, initialIndex, alt }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Sync internal index with prop when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, images.length]); // Added dependencies for keyboard handlers

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal/90 dark:bg-black/95 backdrop-blur-md cursor-zoom-out"
          />
          
          <div className="relative w-full max-w-7xl h-full max-h-[90vh] flex items-center justify-center z-10">
            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-0 md:-left-20 z-20 p-3 bg-white/10 hover:bg-rose/20 text-cream rounded-full backdrop-blur-sm transition-all border border-white/5 group"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 md:-right-20 z-20 p-3 bg-white/10 hover:bg-rose/20 text-cream rounded-full backdrop-blur-sm transition-all border border-white/5 group"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </>
            )}

            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full h-full shadow-2xl rounded-2xl overflow-hidden border border-white/10"
            >
              <Image
                src={images[currentIndex]}
                alt={`${alt} image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
                priority
              />
            </motion.div>
            
            <button
              onClick={onClose}
              className="absolute -top-12 right-0 md:-top-12 md:-right-12 text-cream hover:text-rose transition-colors p-2 bg-white/10 rounded-full backdrop-blur-sm shadow-xl"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            {/* Pagination indicator */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/5 text-xs font-mono text-cream/70 tracking-widest uppercase">
              {currentIndex + 1} <span className="text-rose">/</span> {images.length}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
