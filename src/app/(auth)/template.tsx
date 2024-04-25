"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./styles.css";

const navLinks = [
    { name: "register", href: "/register" },
    { name: "login", href: "/login" },
    { name: "forgot-Password", href: "/forgot-password" },
]

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const [name, setName] = useState("");


    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href);
                return (
                    <Link href={link.href} key={link.name}
                        className={isActive? "font-bold mr-4" : "text-blue-500 mr-4"}
                    >
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}