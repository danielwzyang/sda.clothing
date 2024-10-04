import Link from "next/link";
import * as motion from "framer-motion/client"

export default function NotFound() {
    return <div className="w-screen h-screen flex flex-col items-center justify-center">
        <motion.h1 className="text-3xl" initial={{ opacity: 0, y: "-200%" }} animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.6, ease: "easeInOut" }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }}>
            page not found.
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: "200%" }} animate={{ opacity: 1, y: 0 }}
            transition={{ opacity: { duration: 0.6, ease: "easeInOut", delay: 0.6 }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 } }}>
            <Link href="/" className="hover:text-[#9e9e9e]">click to go back to home</Link>
        </motion.div>
    </div >
}