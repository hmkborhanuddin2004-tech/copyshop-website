"use client";
import { useActionState, useEffect, useState } from "react";
import { useCartStore } from "@/lib/store";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Mock server action since we don't have a real DB/SSLCommerz setup yet
async function processCheckout(prevState: any, formData: FormData) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const method = formData.get("method") as string;
  
  if (!phone.startsWith("+880") && !phone.startsWith("01")) {
    return { error: "Please enter a valid Bangladesh phone number." };
  }
  
  return { 
    success: true, 
    message: `Order placed successfully for ${name}!`,
    method
  };
}

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  
  const [state, formAction, isPending] = useActionState(processCheckout, null);

  useEffect(() => {
    let isMounted = true;
    requestAnimationFrame(() => {
      if (isMounted) setMounted(true);
    });
    return () => { isMounted = false; };
  }, []);

  useEffect(() => {
    if (state?.success) {
      clearCart();
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }, [state, clearCart, router]);

  if (!mounted) return null;

  if (items.length === 0 && !state?.success) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-display text-4xl mb-4 text-[var(--color-coffee)]">Your Cart is Empty</h1>
        <p className="mb-8 text-[var(--color-coffee)]/70">Looks like you haven&apos;t added any coffee yet.</p>
        <Link href="/" className="bg-[var(--color-coffee)] text-[var(--color-cream)] px-8 py-4 rounded-full font-bold">
          Return to Shop
        </Link>
      </div>
    );
  }

  if (state?.success) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex flex-col items-center justify-center text-center px-4 bg-[var(--color-cream)]">
        <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white mb-8 shadow-xl shadow-green-500/20">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <h1 className="font-display text-4xl mb-4 text-[var(--color-coffee)]">Order Confirmed!</h1>
        <p className="text-xl text-[var(--color-coffee)]/70 mb-2">{state.message}</p>
        <p className="text-[var(--color-coffee)]/50">
          {state.method === "sslcommerz" ? "Redirecting to payment gateway..." : "We will contact you shortly for delivery."}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-[var(--color-cream)]">
      <div className="mx-auto max-w-6xl px-4 md:px-8 grid md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Checkout Form */}
        <div>
          <h1 className="font-display text-4xl text-[var(--color-coffee)] mb-8">Checkout</h1>
          
          <form action={formAction} className="space-y-6">
            {state?.error && (
              <div className="p-4 bg-red-100 text-red-700 rounded-xl border border-red-200">
                {state.error}
              </div>
            )}
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[var(--color-coffee)] border-b border-[var(--color-coffee)]/10 pb-2">Delivery Details</h2>
              
              <div>
                <label className="block text-sm font-medium text-[var(--color-coffee)]/70 mb-1">Full Name</label>
                <input required type="text" name="name" className="w-full bg-white border border-[var(--color-coffee)]/20 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-all" placeholder="Rafiq Ahmed" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-[var(--color-coffee)]/70 mb-1">Phone Number</label>
                <input required type="tel" name="phone" className="w-full bg-white border border-[var(--color-coffee)]/20 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-all" placeholder="+8801XXXXXXXXX" />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-coffee)]/70 mb-1">Delivery Address</label>
                <textarea required name="address" rows={3} className="w-full bg-white border border-[var(--color-coffee)]/20 rounded-xl px-4 py-3 outline-none focus:border-[var(--color-amber)] focus:ring-1 focus:ring-[var(--color-amber)] transition-all" placeholder="House No, Road No, Area, Dhaka" />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <h2 className="text-xl font-bold text-[var(--color-coffee)] border-b border-[var(--color-coffee)]/10 pb-2">Payment Method</h2>
              
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border border-[var(--color-coffee)]/20 rounded-xl cursor-pointer hover:border-[var(--color-amber)] transition-colors bg-white">
                  <input type="radio" name="method" value="sslcommerz" defaultChecked className="w-5 h-5 text-[var(--color-amber)] focus:ring-[var(--color-amber)]" />
                  <div className="flex-1">
                    <p className="font-bold text-[var(--color-coffee)]">Pay Online (SSLCommerz)</p>
                    <p className="text-sm text-[var(--color-coffee)]/60">bKash, Nagad, Cards</p>
                  </div>
                </label>
                
                <label className="flex items-center gap-3 p-4 border border-[var(--color-coffee)]/20 rounded-xl cursor-pointer hover:border-[var(--color-amber)] transition-colors bg-white">
                  <input type="radio" name="method" value="cod" className="w-5 h-5 text-[var(--color-amber)] focus:ring-[var(--color-amber)]" />
                  <div className="flex-1">
                    <p className="font-bold text-[var(--color-coffee)]">Cash on Delivery</p>
                    <p className="text-sm text-[var(--color-coffee)]/60">Pay when you receive the package</p>
                  </div>
                </label>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isPending}
              className="w-full mt-8 py-4 rounded-full bg-[var(--color-coffee)] text-white font-bold text-lg hover:bg-[var(--color-coffee-dark)] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
            >
              {isPending ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : "Place Order"}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white/50 p-6 md:p-8 rounded-3xl h-fit border border-[var(--color-coffee)]/5">
          <h2 className="text-2xl font-display text-[var(--color-coffee)] mb-6">Order Summary</h2>
          
          <div className="space-y-4 mb-8">
            {items.map(item => (
              <div key={item.id} className="flex gap-4">
                <div className="w-16 h-16 bg-black/5 rounded-lg overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[var(--color-coffee)]">{item.name}</h3>
                  <p className="text-sm text-[var(--color-coffee)]/60">Qty: {item.quantity}</p>
                </div>
                <div className="font-medium text-[var(--color-coffee)]">
                  ৳{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-3 pt-6 border-t border-[var(--color-coffee)]/10 text-[var(--color-coffee)]">
            <div className="flex justify-between">
              <span className="text-[var(--color-coffee)]/70">Subtotal</span>
              <span className="font-medium">৳{totalPrice()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--color-coffee)]/70">Delivery (Inside Dhaka)</span>
              <span className="font-medium">৳60</span>
            </div>
            <div className="flex justify-between pt-4 border-t border-[var(--color-coffee)]/10 text-xl font-bold">
              <span>Total</span>
              <span>৳{totalPrice() + 60}</span>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
