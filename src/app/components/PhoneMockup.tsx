'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

interface PhoneMockupProps {
  images: string[];
}

export default function PhoneMockup({ images }: PhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (imageRef.current) {
        const { naturalWidth, naturalHeight } = imageRef.current;
        if (naturalWidth && naturalHeight) {
          // Get the container width (phone screen width)
          const containerWidth = scrollRef.current?.clientWidth || 308;
          // Calculate height maintaining aspect ratio
          const scaledHeight = (containerWidth * naturalHeight) / naturalWidth;
          setDimensions({
            width: containerWidth,
            height: scaledHeight
          });
        }
      }
    };

    // Create a hidden image to get natural dimensions
    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.onload = () => {
      if (imageRef.current) {
        imageRef.current.src = img.src;
        updateDimensions();
      }
    };
  }, [currentIndex, images]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isScrolling && scrollRef.current && dimensions.height > 0) {
        setIsScrolling(true);
        
        // First scroll to bottom
        scrollRef.current.scrollTo({
          top: dimensions.height - scrollRef.current.clientHeight,
          behavior: 'smooth'
        });

        // After scrolling, change image and reset scroll
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          setTimeout(() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTop = 0;
              setIsScrolling(false);
            }
          }, 100);
        }, 1000);
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length, isScrolling, dimensions.height]);

  return (
    <div className="relative mx-auto max-w-[360px] md:max-w-[380px]">
      {/* Phone frame */}
      <div className="relative z-10">
        <svg className="w-full h-auto" viewBox="0 0 320 640" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="320" height="640" rx="40" fill="#1F2937"/>
          <rect x="6" y="6" width="308" height="628" rx="34" fill="white"/>
        </svg>
        
        {/* Screen content */}
        <div className="absolute inset-[6px] rounded-[34px] overflow-hidden bg-gray-50">
          <div 
            ref={scrollRef}
            className="w-full h-full overflow-y-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '100%',
                  height: dimensions.height > 0 ? dimensions.height : '100%',
                  position: 'relative'
                }}
              >
                <img
                  ref={imageRef}
                  src={images[currentIndex]}
                  alt={`App screenshot ${currentIndex + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#1F2937] rounded-b-3xl" />
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute -z-10 top-1/4 -left-4 w-72 h-72 bg-[#F50437] rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -z-10 bottom-1/4 -right-4 w-72 h-72 bg-[#9400DA] rounded-full mix-blend-multiply filter blur-xl opacity-70"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.7, 0.4, 0.7],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Navigation dots */}
      <div className="absolute bottom-[-2rem] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setCurrentIndex(index);
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[#F50437] w-4' : 'bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
