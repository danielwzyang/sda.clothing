import Navbar from "@/components/ui/navbar"
import { ChevronDown } from "lucide-react"
import * as motion from "framer-motion/client"
import Section from "@/components/ui/aboutsection"

export default function About() {
    return (
        <div>
            <Navbar />

            <div className="h-[75vh] flex items-center justify-center">
                <motion.h1 initial={{ opacity: 0, y: "-200%" }} animate={{ opacity: 1, y: 0 }}
                    transition={{ opacity: { duration: 0.6, ease: "easeInOut" }, y: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }}
                    className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl">what is SDA?</motion.h1>
            </div>
            <motion.div animate={{ y: [0, "-25%", 0] }} transition={{ duration: 4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
                className="mb-10">
                <ChevronDown size={70} className="mx-auto" />
            </motion.div>

            <Section title="original." lines={[
                "All the designs in our collection",
                "are meticulously curated by our",
                "graphics team. Our commitment",
                "to authenticity and originality",
                "shines through with every piece,",
                "ensuring a collection infused with",
                "passion and creativity."
            ]} side={1} />

            <Section title="affordable." lines={[
                "We believe that fashion should be",
                "accessible for all. Everyone should",
                "be able to express themselves",
                "freely through their clothing,",
                "without emptying their wallets."
            ]} side={-1} />

            <Section title="ethical." lines={[
                "Our commitment to ethical",
                "fashion is unwavering. All our",
                "clothes are sourced through",
                "sustainable means, whether",
                "it be from thrifting or donations.",
                "We priotize people, not profit."
            ]} side={1} />

            <Section title="charitable." lines={[
                "All excess profits will be used to",
                "coordinate charity events for the",
                "unhoused, refugees, and anyone",
                "else in need. Any unsold clothing",
                "will be donated as well. We're not",
                "a business, we're a family"
            ]} side={-1} />
        </div>
    )
}