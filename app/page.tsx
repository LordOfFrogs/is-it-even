import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-left justify-start p-64">
      <div className="flex flex-col space-y-3">
        <h2 className="text-4xl font-bold">Welcome!</h2>
        <p>To the world&apos;s most advanced way to tell if a number is even.</p>
        <p>We implement the <Link className='text-blue-400 underline' href={'https://isevenapi.xyz/'}>isEven API</Link> to make your experience as seamless as possible.</p>
        <Link href="/is-it-even" className="rounded-lg border-4 border-blue-400 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 p-2 transition-colors hover:border-blue-600 hover:text-blue-300 w-fit">
            Get Started -{">"}
        </Link>
      </div>
    </main>
  );
}
