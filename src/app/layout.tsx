import type { Metadata } from "next";
import { CartProvider } from "@/components/storefront";
import "./globals.css";
import "./delivery.css";
import "./theme.css";
import "./product-photography.css";
import "./editorial-reset.css";
import "./categories-theme.css";
import "./no-sky.css";
import "./cart-pop.css";
export const metadata: Metadata = { title: "small joy market", description: "Practical objects, unreasonably joyful." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><CartProvider>{children}</CartProvider></body></html>; }
