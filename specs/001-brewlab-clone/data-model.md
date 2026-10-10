# Data Model & State

As an MVP frontend clone, the system relies on client-side state management (Zustand) and does not require an active database backend yet.

## Client State (Zustand)

### CartStore
Manages the global shopping cart state.

```typescript
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  type: 'beans' | 'capsule' | 'bundle';
}

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  
  // Actions
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  
  // Computed
  totalPrice: () => number;
  totalItems: () => number;
}
```

## Contracts / Forms

### Checkout Action Contract

```typescript
// useActionState Payload
interface CheckoutPayload {
  customerName: string;
  phone: string;         // Validated for Bangladesh format: +880...
  address: string;
  paymentMethod: 'sslcommerz' | 'cod';
  cartItems: { id: string; quantity: number }[];
}

interface CheckoutResponse {
  success: boolean;
  message: string;
  redirectUrl?: string; // e.g., SSLCommerz payment gateway URL
}
```
