import Sidebar from "@/components/sidebar/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard for your super notes",
  description: "easily create, read, update and delete your superistic notes",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased h-screen w-full`}
      >
        <Sidebar/>
        {children}
      </body>
    </html>
  );
}
