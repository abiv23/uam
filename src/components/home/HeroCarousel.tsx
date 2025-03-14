"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const heroSlides = [
  {
    id: 1,
    imageUrl: "https://www.jrmcm.com/content/uploads/2022/01/Website-Banner9.jpg",
    title: "Excellence in Construction Management",
    description: "Building the future with expertise and precision",
    ctaText: "Explore Our Work",
    ctaLink: "/projects",
  },
  {
    id: 2,
    imageUrl: "https://www.jrmcm.com/content/uploads/2023/12/Website-Best-Places-Banner-2023-scaled.jpg",
    title: "Award-Winning Construction",
    description: "Recognized as one of the best places to work in NYC",
    ctaText: "Join Our Team",
    ctaLink: "/careers",
  },
  {
    id: 3,
    imageUrl: "https://www.jrmcm.com/content/uploads/2024/08/Construction-Mgmt-1-scaled.jpeg",
    title: "Innovative Design Solutions",
    description: "Creating spaces that inspire and perform",
    ctaText: "Our Expertise",
    ctaLink: "/expertise",
  },
]

export default function HeroCarousel() {
  return (
    <section className="relative">
      <Carousel className="w-full h-[500px] md:h-[600px] lg:h-[700px]">
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id} className="relative">
              <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={slide.id === 1}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-24">
                  <div className="max-w-3xl">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-8">
                      {slide.description}
                    </p>
                    <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
                      <Link href={slide.ctaLink}>{slide.ctaText}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  )
}
