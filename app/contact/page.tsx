import Navbar from "@/components/ui/navbar"
import { Metadata } from "next"
import * as motion from "framer-motion/client"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'contact',
    description: 'reach out to us!',
}

const lines = [
    <>If you have any questions,</>,
    <>please reach out at:</>,
    <Link key={0} href="mailto:stuydonatedapparel@gmail.com" className="text-[#cfd0ff] hover:text-[#a8a9ff] underline">
        stuydonatedapparel@gmail.com
    </Link>,
    <a key={0} href="instagram.com/stuydonatedapparel" className="text-[#cfd0ff] hover:text-[#a8a9ff] underline">
        @stuydonatedapparel
    </a>,
    <>Thank you!</>
]

const delays = [
    0.5,
    1,
    2,
    2.5,
    4
]

export default function Contact() {
    return (
        <div className="mb-10">
            <Navbar />
            <div className="h-[80vh] flex flex-col items-center justify-center">
                {
                    lines.map((e, i) => {
                        return <motion.h1 key={i} initial={{ opacity: 0, y: "120%" }} animate={{ opacity: 1, y: 0 }}
                                transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: delays[i] }, y: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: delays[i] } }}
                                className={"w-fit mx-auto text-xl sm:text-2xl" + (i == 4 ? " mt-10" : "")}>
                                {e}
                            </motion.h1>
                    })
                }
            </div>
        </div>
    )
}
