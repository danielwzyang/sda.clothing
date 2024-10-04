"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"
import { CldImage } from "next-cloudinary"

export interface carouselProps {
    tag: string,
    length: number,
    models: string[]
}

export default function ClothingCarousel(props: carouselProps) {
    return (
        <div className="flex justify-center">
            <Carousel className="w-[70vw] max-w-[500px]">
                <CarouselContent>
                    {
                        Array.from({ length: props.length }).map((_, i) => (
                            <CarouselItem key={i}>
                                <div className="p-1">
                                    <CldImage src={props.tag + i} alt={props.tag + i} width={1000} height={1000} />
                                </div>
                            </CarouselItem>
                        ))
                    }
                    {
                        props.models.map((e, i) => (
                            <CarouselItem key={i}>
                                <div className="p-1">
                                    <CldImage src={e} alt={e} width={1000} height={1000} />
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}