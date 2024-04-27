"use client"

import { useRouter } from "next/navigation"

export function Ad({ text }: { text: string }) {
    const router = useRouter();

    return (
        <div className="fixed inset-0 space-x-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
            <div className="p-8 w-1/4 shadow-lg rounded-md bg-blue-950 flex flex-col justify-start items-center space-y-10">
                <div className="text-center space-y-5">
                    <h3 className="text-2xl font-bold text-white">Here, have an ad</h3>
                    <p className="text-lg text-white">{text}</p>
                </div>
                <button 
                    onClick={router.back} 
                    className="rounded-lg border-4 border-blue-400 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 p-2 my-10 transition-colors hover:border-blue-600 hover:text-blue-300 w-fit"
                >
                    Close
                </button>
            </div>
        </div>
    );
}