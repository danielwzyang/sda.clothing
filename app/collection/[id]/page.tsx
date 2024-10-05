import ClothingCarousel from "@/components/ui/clothingCarousel"
import Navbar from "@/components/ui/navbar"
import get from "@/firebase/get"
import { notFound } from "next/navigation"
import Paragraph from "@/components/ui/centerParagraph"
import * as motion from "framer-motion/client"

export async function generateStaticParams() {
    const clothing = await get()

    return Object.keys(clothing).map((e: string) => ({ id: e }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const id = params.id as keyof typeof clothing
    const clothing = await get()

    return {
        title: clothing[id].name.split(" ").map((e: string) => e.charAt(0).toUpperCase() + e.slice(1)).join(" "),
        description: clothing[id].desc.join("\n")
    }
}

export default async function Clothing({ params }: { params: { id: string } }) {
    const id = params.id as keyof typeof clothing
    const clothing = await get()
    if (!(id in clothing)) {
        return notFound()
    }

    return <div className="mb-10">
        <Navbar />
        <motion.h1 initial={{ opacity: 0, y: "-200%" }} animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: 0.2 }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }}
            className="text-3xl mx-auto w-fit">
            {clothing[id].name}
        </motion.h1>

        <motion.h1 initial={{ opacity: 0, y: "-200%" }} animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.6, ease: "easeInOut" }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }}
            className="text-xl mx-auto w-fit mt-1 mb-3 text-[#585858]">
            {clothing[id].price}
        </motion.h1>

        <ClothingCarousel tag={params.id} length={clothing[id].images} models={clothing[id].models} />

        <Paragraph lines={clothing[id].desc} />
    </div>
}