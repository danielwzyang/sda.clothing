"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel"

export interface carouselProps {
    tag: string,
    length: number,
    models: string[]
}

export default function ClothingCarousel(props: carouselProps) {
    return (
        <div className="flex justify-center">
            <Carousel className="w-[70vw] max-w-[50vh]">
                <CarouselContent>
                    {
                        Array.from({ length: props.length }).map((_, i) => (
                            <CarouselItem key={i}>
                                <img src={`https://res.cloudinary.com/stuydonatedapparel/image/upload/w_1000/${props.tag}${i}`} alt={props.tag + i} width={1000} height={1000} className="p-1" />
                            </CarouselItem>
                        ))
                    }
                    {
                        props.models.map((e, i) => (
                            <CarouselItem key={i}>
                                <img src={`https://res.cloudinary.com/stuydonatedapparel/image/upload/w_1000/${e}`} alt={e} width={1000} height={1000} className="p-1" />
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