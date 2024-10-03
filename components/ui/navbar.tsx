"use client"

import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetDescription } from "./sheet"
import { Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
    return <div className="h-[80px] relative flex items-center px-5">
        <Link href="/"><Image src="/sda.png" alt="icon" height={40} width={40} /></Link>
        <div className="hidden sm:flex gap-7 absolute right-10">
            <Link href="/about" className="text-2xl hover:text-[#9e9e9e]">about</Link>
            <Link href="/collection" className="text-2xl hover:text-[#9e9e9e]">collection</Link>
            <Link href="/team" className="text-2xl hover:text-[#9e9e9e]">team</Link>
            <Link href="/contact" className="text-2xl hover:text-[#9e9e9e]">contact</Link>
        </div>
        <Sheet>
            <SheetTrigger className="h-10 w-10 flex justify-center items-center absolute right-5 sm:hidden">
                <Menu />
            </SheetTrigger>
            <SheetContent className="mt-20 w-fit h-fit bg-transparent border-0 p-0 pr-8" onOpenAutoFocus={(e) => e.preventDefault()}>
                <SheetTitle></SheetTitle>
                <SheetDescription></SheetDescription>
                <div className="flex flex-col gap-1 ">
                    <Link href="/about" className="text-2xl hover:text-[#9e9e9e] text-right">about</Link>
                    <Link href="/collection" className="text-2xl hover:text-[#9e9e9e] text-right">collection</Link>
                    <Link href="/team" className="text-2xl hover:text-[#9e9e9e] text-right">team</Link>
                    <Link href="/contact" className="text-2xl hover:text-[#9e9e9e] text-right">contact</Link>
                </div>
            </SheetContent>
        </Sheet>
    </div>
}