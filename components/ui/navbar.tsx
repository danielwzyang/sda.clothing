"use client"

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "./sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import * as motion from "framer-motion/client"
import { useState } from "react"

export default function Navbar() {
    const [opened, toggleMenu] = useState(false)

    return <div className="h-[80px] relative flex items-center px-5">
        <Link href="/"><Image src="/sda.png" alt="icon" height={40} width={40} /></Link>
        <div className="hidden sm:flex gap-7 absolute right-10">
            <Link href="/" className="text-2xl hover:text-[#9e9e9e]">home</Link>
            <Link href="/about" className="text-2xl hover:text-[#9e9e9e]">about</Link>
            <Link href="/collection" className="text-2xl hover:text-[#9e9e9e]">collection</Link>
            <Link href="/team" className="text-2xl hover:text-[#9e9e9e]">team</Link>
            <Link href="/contact" className="text-2xl hover:text-[#9e9e9e]">contact</Link>
        </div>
        <Sheet onOpenChange={(open) => toggleMenu(open)}>
            <SheetTrigger className="h-10 w-10 flex justify-center items-center absolute right-5 sm:hidden">
                <motion.div
                    initial={{ rotate: 0 }}
                    animate={opened ? { rotate: 180 } : { rotate: 0 }}
                    transition={{ duration: 0.5 }}>
                    <Menu />
                </motion.div>
            </SheetTrigger>
            <SheetContent className="mt-20 w-fit h-fit bg-transparent border-0 p-0 pr-8" onOpenAutoFocus={(e) => e.preventDefault()}>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
                <div className="flex flex-col gap-1 bg-transparent">
                    {
                        ["home", "about", "collection", "team", "contact"].map((e, i) => {
                            return <motion.div key={i}
                                className="flex justify-end"
                                initial={{ x: "100%" }}
                                animate={{ x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.075 }}>
                                <Link href={"/" + e == "home" ? "" : e} className="text-2xl hover:text-[#9e9e9e] text-right">{e}</Link>
                            </motion.div>
                        })
                    }
                </div>
            </SheetContent>
        </Sheet>
    </div>
}