import type { Metadata } from "next";
import { Kanit } from 'next/font/google'
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";

export const fontSecondary = Playfair_Display({
    weight: ["400", "600"],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-playfair-display-sans",
})

export const fontMain = Kanit({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin'],
    display: 'swap',
    variable: "--font-kanit-sans",
})


export const metadata: Metadata = {
  title: "Spotify Clone",
  description: "Listen to music",
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const userSongs = await getSongsByUserId();

  return (
    <html lang="en">
      <body
        className={`${fontMain.className} ${fontSecondary.className} antialiased`}
      >
      <ToasterProvider />
      <SupabaseProvider>
          <UserProvider>
              <ModalProvider />
              <Sidebar songs={userSongs}>
                  {children}
              </Sidebar>
          </UserProvider>
      </SupabaseProvider>
      </body>
    </html>
  );
}
