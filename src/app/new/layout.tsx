import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create a new note",
  description: "Create your new note at SuperNotes",
};

export default function NewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-screen flex p-8 space-y-4">
      {children}
    </div>
  );
}