"use client";
import { useEffect, useState } from "react";
import { useCartStore } from "@/lib/store";
import Link from "next/link";

export function CartDrawer() {
  const { items, isOpen, toggleCart, removeItem, updateQuantity, totalPrice } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let isMounted = true;
    useCartStore.persist.rehydrate();
    requestAnimationFrame(() => {
      if (isMounted) setMounted(true);
    });
    return () => { isMounted = false; };
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={toggleCart}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[var(--color-cream)] shadow-2xl z-[101] transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-coffee)]/10">
          <h2 className="font-display text-2xl text-[var(--color-coffee)]">Your Cart</h2>
          <button onClick={toggleCart} className="text-[var(--color-coffee)]/50 hover:text-[var(--color-coffee)] transition-colors p-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-[var(--color-coffee)]/50">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              <p>Your cart is empty.</p>
            </div>
          ) : (
            items.map(item => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 bg-black/5 rounded-xl overflow-hidden shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-[var(--color-coffee)]">{item.name}</h3>
                    <button onClick={() => removeItem(item.id)} className="text-[var(--color-destructive)] hover:text-red-700 transition-colors">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                    </button>
                  </div>
                  <p className="text-sm text-[var(--color-coffee)]/60 mb-2">৳{item.price}</p>
                  
                  <div className="flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-7 h-7 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">-</button>
                    <span className="font-medium w-4 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-7 h-7 rounded-full bg-black/5 flex items-center justify-center hover:bg-black/10 transition-colors">+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-[var(--color-coffee)]/10 bg-white/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium text-[var(--color-coffee)]">Subtotal</span>
              <span className="text-2xl font-display text-[var(--color-coffee)]">৳{totalPrice()}</span>
            </div>
            <Link 
              href="/checkout"
              onClick={toggleCart}
              className="w-full flex items-center justify-center py-4 rounded-full bg-[var(--color-coffee)] text-[var(--color-cream)] font-bold text-lg hover:bg-[var(--color-coffee-dark)] transition-colors"
            >
              Checkout via SSLCommerz
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
