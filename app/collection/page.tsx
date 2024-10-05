import ClothingCard from "@/components/ui/clothingCard"
import Navbar from "@/components/ui/navbar"
import * as motion from "framer-motion/client"
import get from "@/firebase/get"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'collection',
    description: 'check out our previous clothing!',
}

const drop1 = ["cmigyl", "igor", "brent", "yellowgundam", "greengundam", "pinkgundam", "venom", "batman", "shark", "sdastar"]

export default async function Collection() {
    const clothing = await get()

    return (
        <div className="mb-10">
            <Navbar />

            <motion.h1 initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }}
                transition={{ opacity: { duration: 0.6, ease: "easeInOut" }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }}
                className="mx-auto w-fit text-7xl sm:text-8xl mt-3 mb-7">
                DROP #1
            </motion.h1>

            <div className="flex flex-wrap mx-auto justify-center gap-x-10 gap-y-5 w-[75vw] max-w-[1300px]">
                {
                    drop1.map((e, i) => {
                        return <motion.div key={i} initial={{ opacity: 0, y: "100%" }} animate={{ opacity: 1, y: 0 }}
                        transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: (i + 1) * 0.2 }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: (i + 1) * 0.2 } }}>
                            <ClothingCard id={e} data={clothing[e as keyof typeof clothing]} />
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
}