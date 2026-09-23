'use client';

import * as React from 'react';
import Image from 'next/image';
import { GripVertical } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before (Legacy)',
  afterLabel = 'After (Redesign)',
  title,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = React.useState(50);
  const [isDragging, setIsDragging] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 5) percentage = 5;
    if (percentage > 95) percentage = 95;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 my-8">
      {title && (
        <h4 className="text-sm font-semibold tracking-wider text-neutral-400 uppercase">
          {title}
        </h4>
      )}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden border border-neutral-800 select-none cursor-ew-resize group shadow-2xl"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="After Redesign"
            fill
            className="object-cover"
            sizes="(max-width: 1200px) 100vw, 1200px"
          />
          <div className="absolute bottom-4 right-4 bg-emerald-500/90 text-neutral-950 font-semibold text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
            {afterLabel}
          </div>
        </div>

        {/* Before Image (Clipped overlay) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full" style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100vw' }}>
            <Image
              src={beforeImage}
              alt="Before Redesign"
              fill
              className="object-cover grayscale brightness-75"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute bottom-4 left-4 bg-neutral-900/90 text-neutral-200 border border-neutral-700 font-medium text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
              {beforeLabel}
            </div>
          </div>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-emerald-400 cursor-ew-resize flex items-center justify-center -ml-0.5 shadow-[0_0_12px_rgba(0,229,153,0.6)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-8 h-8 rounded-full bg-emerald-400 text-neutral-950 flex items-center justify-center shadow-lg border-2 border-neutral-900 transition-transform group-hover:scale-110">
            <GripVertical className="w-4 h-4" />
          </div>
        </div>
      </div>
      <p className="text-xs text-neutral-400 text-center">
        Drag slider left and right to inspect the visual transformation
      </p>
    </div>
  );
}

