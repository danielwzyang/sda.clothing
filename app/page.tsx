import Navbar from "@/components/ui/navbar"
import Image from "next/image"
import * as motion from "framer-motion/client"

export default function Home() {
    return (
        <div className="h-screen flex flex-col">
            <Navbar />
            <div className="flex flex-grow items-center">
                <motion.div>
                    <Image src="/swan.png" alt="swan" width={1000} height={800} />
                </motion.div>
            </div>
        </div>
    )
}
