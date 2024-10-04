"use client"

import { CldImage } from "next-cloudinary"
import Link from "next/link"

export interface clothingCardProps {
    id: string,
    data: {
        name: string,
        price: string
    }
}

export default function ClothingCard(props: clothingCardProps) {
    return <Link href={"/collection/" + props.id}>
        <div className="sm:w-[200px]">
            <CldImage src={props.id + "0"} alt={props.id + " cover"} width="300" height="300" />
            <h1 className="w-fit mx-auto !leading-tight mt-2 text-lg md:text-normal">{props.data.name}</h1>
            <h1 className="w-fit mx-auto !leading-tight text-[#585858] text-normal md:text-sm">{props.data.price}</h1>
        </div>
    </Link>
}