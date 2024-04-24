import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-left justify-start p-64">
      <div>
        <h2 className="text-4xl font-bold pb-5">Welcome!</h2>
        <p>To the world&apos;s most advanced way to tell if a number is even.</p>
      </div>
      <a
        href="/is-it-even"
        className="rounded-lg border-4 border-blue-400 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 p-2 my-10 transition-colors hover:border-blue-600 hover:text-blue-300 w-fit">Get Started -{">"}</a>
    </main>
  );
}
