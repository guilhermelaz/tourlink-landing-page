'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PhoneMockupProps {
  images: string[];
}

export default function PhoneMockup({ images }: PhoneMockupProps) {
  return (
    <div className="relative mx-auto max-w-[360px] md:max-w-[380px]">
      {/* Phone frame */}
      <div className="relative z-10">
        <svg className="w-full h-auto" viewBox="0 0 320 640" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0" y="0" width="320" height="640" rx="40" fill="#1F2937"/>
          <rect x="6" y="6" width="308" height="628" rx="34" fill="white"/>
        </svg>
        
        {/* Screen content */}
        <div className="absolute inset-[6px] rounded-[34px] overflow-hidden">
          <motion.div 
            className="flex transition-transform duration-500 h-full"
            animate={{ 
              x: [0, -100, -200, -300, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full flex-shrink-0">
                <Image
                  src={image}
                  alt={`App screenshot ${index + 1}`}
                  width={308}
                  height={628}
                  className="w-full h-full object-cover"
                  priority={index === 0}
                />
              </div>
            ))}
          </motion.div>
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
    </div>
  );
}
