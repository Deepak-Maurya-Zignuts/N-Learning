"use client";
import { useRouter } from "next/navigation"

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Order Product");
        router.push("/ ");
    } 
    return (
        <>
            <div><h1>Order Product</h1></div>
            <button onClick={ handleClick }>Place Order </button>
        </>
    );
}