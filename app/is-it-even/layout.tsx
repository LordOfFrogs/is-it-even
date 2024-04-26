import NumberInput from "./numberInput";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="grid min-h-screen grid-cols-2 items-left justify-stretch p-64 space-x-20">
            <div className="flex flex-col justify-center space-y-4 justify-self-end">
                <p className="font-semibold">Enter number here:</p>
                <NumberInput />
            </div>
            {children}
        </main>
    )
}