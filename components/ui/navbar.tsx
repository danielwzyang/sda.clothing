import Link from "next/link"

export default function Navbar() {
    return <div className="h-[80px] relative flex items-center px-5">
        <img src="/sda.png" alt="icon" className="h-[40px]"/>
        <div className="hidden sm:flex gap-7 absolute right-10">
            <Link href="" className="text-2xl hover:text-[#9e9e9e]">about</Link>
            <Link href="" className="text-2xl hover:text-[#9e9e9e]">collection</Link>
            <Link href="" className="text-2xl hover:text-[#9e9e9e]">team</Link>
            <Link href="" className="text-2xl hover:text-[#9e9e9e]">contact</Link>
        </div>
    </div>   
}