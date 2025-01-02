import Logo from "@/components/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="center w-full flex-col flex items-center space-y-4">
        <Logo className="text-4xl md:text-7xl lg:text-9xl" />
        <p className="text-center text-lg text-gray-500">
          Easily create your notes
        </p>
        <div className="flex w-fit items-center justify-between space-x-4">
          <Link className="px-6 py-3 rounded-lg font-bold bg-primary text-black"
            href="/login">Get started</Link>
          <Link className="px-6 py-3 rounded-lg text-secondary border-2 border-secondary"
            href="/dashboard">Dashboard</Link>
        </div>
      </div>
    </>
  );
}
