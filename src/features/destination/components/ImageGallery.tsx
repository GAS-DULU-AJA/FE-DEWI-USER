"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const dedupedImages = useMemo(
    () =>
      images.filter((value, index, array) => array.indexOf(value) === index),
    [images],
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedImage = dedupedImages[selectedIndex] ?? dedupedImages[0] ?? "";

  return (
    <section className="space-y-4">
      <div className="rounded-[24px] overflow-hidden bg-surface-container-lowest shadow-[0_12px_40px_rgba(45,51,53,0.06)]">
        <Image
          src={selectedImage}
          alt={`${title} image ${selectedIndex + 1}`}
          width={1400}
          height={900}
          className="h-[420px] md:h-[560px] w-full object-cover"
          unoptimized
          priority
        />
      </div>

      <div className="grid grid-cols-4 gap-3">
        {dedupedImages.slice(0, 4).map((image, index) => {
          const isActive = index === selectedIndex;
          return (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                isActive
                  ? "ring-2 ring-primary"
                  : "opacity-80 hover:opacity-100"
              }`}
              aria-label={`Select gallery image ${index + 1}`}
            >
              <Image
                src={image}
                alt={`${title} thumbnail ${index + 1}`}
                width={360}
                height={220}
                className="h-24 md:h-28 w-full object-cover"
                unoptimized
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}
