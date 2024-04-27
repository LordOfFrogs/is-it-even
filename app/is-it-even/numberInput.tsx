"use client"

import Link from "next/link"
import { ChangeEvent, useState } from "react";

export default function NumberInput() {
    const [currentNum, setCurrentNum] = useState(NaN);

    const handleNumInput = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentNum(e.target.valueAsNumber);
    }

    return (
        <div className="flex flex-col justify-start space-y-4">
            <p className=" text-2xl font-semibold">Enter number here:</p>
            <input type="number" name="number" value={currentNum ? currentNum : ''}
                onChange={handleNumInput} 
                className="w-56 h-min text-black rounded-lg p-2" />
            <Link type="submit" href={`/is-it-even/${currentNum}?showAd=true`} className="rounded-lg border-4 border-blue-400 bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 p-2 my-10 transition-colors hover:border-blue-600 hover:text-blue-300 w-fit">
                Get Result
            </Link>
        </div>
        
    )
}