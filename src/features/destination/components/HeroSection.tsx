"use client";

import { useState } from "react";
import Image from "next/image";
import { SearchBar } from "./SearchBar";

export function HeroSection() {
  const [village, setVillage] = useState("");
  const [experience, setExperience] = useState("");
  const [date, setDate] = useState("");

  function handleSearch() {
    // Search routing will be implemented in future pages
    console.log({ village, experience, date });
  }

  return (
    <section className="relative w-full min-h-230.25 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBamm-gpsjoiSqF3HolgI_AHV8MpQjj0r_f83rj49nx82IBAOvjvC0hlQo7dLKUaOjzN9a5RI2Ig3M8Umzv5IpR36SNrRZjuO8_aIIsm-Ccn85KnuLDNrdXfjt3GGTMmNAd88Lo_GcTjQrIvwJIFZGfDEsaUWoQ-XqWWlE91yuCLZHFhqpKHK8MstgDc3zjWK6s6UHu2BqT9vSEzRSibc8R63m90NsKCXbFgeWP_tKy51wh9w1U-DqGuWPh-oZwDVSVixVC4UcMZIo"
          alt="Aerial view of Penglipuran traditional village in Bali with bamboo rooftops and lush tropical gardens"
          fill
          className="object-cover brightness-75"
          priority
          unoptimized
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-8 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight font-headline">
          Experience the Soul of <br />
          <span className="text-primary-container">Rural Indonesia</span>
        </h1>

        <SearchBar
          village={village}
          experience={experience}
          date={date}
          onVillageChange={setVillage}
          onExperienceChange={setExperience}
          onDateChange={setDate}
          onSearch={handleSearch}
        />
      </div>
    </section>
  );
}
