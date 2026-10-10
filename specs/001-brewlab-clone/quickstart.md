# Quickstart & Validation Guide

## Prerequisites
- Node.js 20.x+
- `npm` or `pnpm`

## Setup

```bash
cd "Coffee Shop"
npm install
npm run dev
```

## Validation Scenarios

### Scenario 1: Initial Render & Performance
1. Open `http://localhost:3000`
2. **Verify**: The Hero text splits and animates smoothly from the bottom.
3. **Verify**: Open Chrome DevTools > Network > Throttling > "Slow 3G". Refresh.
4. **Expected**: Video assets DO NOT load. Static `poster` images display instantly instead.

### Scenario 2: Phase 4 Pseudo-3D Cards
1. Scroll down to the "Popular Flavors" section.
2. **Verify**: The cards are not rendered immediately (Intersection Observer lazy-loads them).
3. **Verify**: Hovering the mouse over the cards applies a CSS `rotateY` and `rotateX` perspective tilt based on the cursor position.

### Scenario 3: Global Cart State
1. Click the "Order Now" button on any product.
2. **Verify**: A sliding cart drawer opens from the right.
3. **Verify**: The item appears in the cart, and the total price updates.
4. **Verify**: Navigating to the checkout route preserves the cart state.
