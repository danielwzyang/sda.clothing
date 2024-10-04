import Navbar from "@/components/ui/navbar"
import Image from "next/image"

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-grow items-center justify-center">
                <Image src="/swan.png" alt="swan" width={500} height={400} />
            </div>
        </div>
    )
}
