import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Akwankyere",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FCF8EC] text-foreground h-screen">
        {children}
      </body>
    </html>
  );
}
