import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-slate-900 flex items-center justify-between p-4 mb-8">
          <Link href="/">
            <div className="uppercase text-sm">Tareas App</div>
          </Link>

          <Link href="/nueva-tarea">
            <button className="py-2 px-8 rounded-sm bg-green-600 hover:bg-green-800">Nueva tarea</button>
          </Link>
        </nav>
        <div className="flex flex-col items-center">{children}</div>
      </body>
    </html>
  );
}
