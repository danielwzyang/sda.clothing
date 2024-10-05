import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const coolvetica = localFont({src: "./fonts/Coolvetica.otf"})

export const metadata: Metadata = {
    title: "sda",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={coolvetica.className}>
                {children}
            </body>
        </html>
    );
}
