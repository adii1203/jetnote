"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import img from "./images/Group 1.jpg";
import img2 from "./images/calander.png";

interface CardProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  isVisible?: boolean;
  initialTransform?: string;
}

export default function Card({
  src,
  alt,
  width,
  height,
  className = "",
  isVisible = false,
  initialTransform = "",
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [style, setStyle] = useState({});

  useEffect(() => {
    const rotateMatch = initialTransform.match(/rotate\([^)]+\)/);
    const baseRotation = rotateMatch ? rotateMatch[0] : "";
    const translatePart = initialTransform.replace(baseRotation, "").trim();

    const baseStyle = {
      aspectRatio: `${width} / ${height}`,
      transition:
        "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
      opacity: isVisible ? 1 : 0,
      transform: `${translatePart} ${baseRotation} scale(${isVisible ? 1 : 0.8})`,
    };

    const hoverStyle = isHovered
      ? {
          transform: `${translatePart} rotate(0deg) scale(1.05)`,
          transition: "transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }
      : {};

    setStyle({ ...baseStyle, ...hoverStyle });
  }, [isHovered, isVisible, width, height, className, initialTransform]);

  return (
    <div
      className={`absolute shadow-[0_15px_50px_rgba(160,54,83,0.1)] rounded-[1.5rem] sm:rounded-3xl border border-[#e4839b]/20 overflow-hidden ${className}`}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </div>
  );
}

export const Cards = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative w-full max-w-[400px] sm:max-w-[520px] md:max-w-[600px] lg:max-w-3xl h-[550px] sm:h-[650px] md:h-[700px] lg:h-[750px]">
      <Card
        src={img}
        alt="Hero image"
        width={490}
        height={259}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[420px] md:w-[490px] lg:w-[490px]"
        isVisible={isVisible}
        initialTransform="translate(-45%, -120%) rotate(8deg)"
      />
      <Card
        src={img2}
        alt="Hero image"
        width={294}
        height={305}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[252px] md:w-[294px] lg:w-[294px]"
        isVisible={isVisible}
        initialTransform="translate(-85%, -30%) rotate(-8deg)"
      />
    </div>
  );
};
