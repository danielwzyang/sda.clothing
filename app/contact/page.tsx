import Navbar from "@/components/ui/navbar"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'contact',
    description: 'reach out to us!',
}

export default function Contact() {
    return (
        <div className="mb-10">
            <Navbar />
        </div>
    )
}