'use client'

import { useEffect } from "react";

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex static flex-col items-start justify-center">
            <p className="text-lg font-bold">Something went wrong:</p>
            <p className="text-lg font-medium font-mono bg-neutral-800 px-2 rounded">{'"'+error.message+'"\n Stack: '+error.stack}</p>
        </div>
    )
}