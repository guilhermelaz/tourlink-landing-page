'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface PhoneMockupProps {
  images: string[];
}

export default function PhoneMockup({ images }: PhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (imageRef.current) {
        const { naturalWidth, naturalHeight } = imageRef.current;
        if (naturalWidth && naturalHeight) {
          const containerWidth = containerRef.current?.clientWidth || 308;
          const scaledHeight = (containerWidth * naturalHeight) / naturalWidth;
          setDimensions({
            width: containerWidth,
            height: scaledHeight
          });
        }
      }
    };

    const img = document.createElement('img');
    img.src = images[currentIndex];
    img.onload = updateDimensions;

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [currentIndex, images]);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    const nextIndex = currentIndex + newDirection;
    if (nextIndex >= 0 && nextIndex < images.length) {
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <div className="relative mx-auto max-w-[280px] md:max-w-[380px]">
      {/* Phone frame */}
      <div className="relative z-10">
        <svg className="w-full h-auto" viewBox="0 0 320 640" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="320" height="640" rx="40" fill="#1F2937"/>
          <rect x="6" y="6" width="308" height="628" rx="34" fill="white"/>
        </svg>
        
        {/* Screen content */}
        <div className="absolute inset-[6px] rounded-[34px] overflow-hidden bg-black">
          <div 
            ref={containerRef}
            className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-hide relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <AnimatePresence initial={false} custom={currentIndex}>
              <motion.div
                key={currentIndex}
                custom={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="h-full flex items-start justify-center"
                style={{
                  width: '100%',
                  position: 'relative',
                  backgroundColor: 'black'
                }}
              >
                <img
                  ref={imageRef}
                  src={images[currentIndex]}
                  alt={`App screenshot ${currentIndex + 1}`}
                  className="w-full h-auto"
                  style={{
                    touchAction: 'pan-y',
                    objectFit: 'contain',
                    maxWidth: '100%'
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#1F2937] rounded-b-3xl" />
      </div>

      {/* Navigation buttons for desktop */}
      <button
        onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
        className={`hidden md:flex absolute left-[-3rem] top-1/2 transform -translate-y-1/2 z-20 
          items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-white 
          transition-all duration-200 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={currentIndex === 0}
        aria-label="Previous image"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => currentIndex < images.length - 1 && setCurrentIndex(currentIndex + 1)}
        className={`hidden md:flex absolute right-[-3rem] top-1/2 transform -translate-y-1/2 z-20 
          items-center justify-center w-10 h-10 rounded-full bg-white/90 shadow-md hover:bg-white 
          transition-all duration-200 ${currentIndex === images.length - 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={currentIndex === images.length - 1}
        aria-label="Next image"
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Navigation caption */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <p className="text-sm font-medium text-gray-600">Deslize para navegar</p>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
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

      {/* Page indicators */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-[#F50437] w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
