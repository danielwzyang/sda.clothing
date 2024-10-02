import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const coolvetica = localFont({src: "./fonts/Coolvetica.otf"})

export const metadata: Metadata = {
    title: "Stuyvesant Donated Apparel",
    description: "",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={coolvetica.className}>
                {children}
            </body>
        </html>
    );
}
