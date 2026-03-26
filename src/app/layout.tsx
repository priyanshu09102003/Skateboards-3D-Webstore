import type { Metadata } from "next";
import { Bowlby_One_SC , DM_Mono} from "next/font/google";
import "./globals.css";
import { SVGFilters } from "@/components/SVGFilters";
import SmoothScrolling from "@/components/SmoothScrolling";
import EmojiCursor from "@/components/CustomCursor";

const bowlby = Bowlby_One_SC({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-bowlby-sc',
  weight: "400"
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-dm-mono',
  weight: "500"
})

export const metadata: Metadata = {
  title: "3D-Customizer",
  description: "Customize your skateboard the way you want it to be",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${bowlby.variable} ${dmMono.variable} antialiased font-mono font-medium text-zinc-800 `}
      >


        <SmoothScrolling>

        <EmojiCursor/>

            <main>


              {children}


            </main>

            <SVGFilters />

        </SmoothScrolling>
      </body>
    </html>
  );
}
