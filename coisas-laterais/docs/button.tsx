'use client'

import { useSearchParams } from "next/navigation";

export default function Button() {
    const searchParams = useSearchParams()
    
    console.log(searchParams.get('name'));
    
    return <button>Button</button>
}