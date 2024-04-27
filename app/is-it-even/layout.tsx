import Link from "next/link";
import NumberInput from "./numberInput";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="grid static min-h-screen grid-cols-2 items-left justify-stretch p-64 gap-x-10">
            <Link type="button" href={'/'} className="fixed top-10 left-10 rounded-lg border-4 border-blue-400 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 p-2 transition-colors hover:border-blue-600 hover:text-blue-300 w-fit">
                {'<-'} Back
            </Link>
            <div className="flex flex-col justify-center space-y-4 justify-self-end">
                <NumberInput />
            </div>
            {children}
        </main>
    )
}