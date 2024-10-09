import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
     <Link href = '/sentry-example-page' className = "flex justify-center px-2 py-2 bg-purple-600 hover:bg-purple-400 w-48 rounded-lg font-semibold">Go to sentry page</Link>
    </div>
  );
}
