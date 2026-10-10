// BrewHaven Coffee — Contact form API helper
// Sends form data to the FastAPI backend and returns a typed response.

import type { ContactApiResponse, ContactFormData } from "@/lib/types";

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

export async function submitContactForm(
  data: ContactFormData
): Promise<ContactApiResponse> {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(
      (error as { detail?: string }).detail ??
        "Failed to send message. Please try again."
    );
  }

  return res.json() as Promise<ContactApiResponse>;
}

export async function fetchMenuItems(category?: string): Promise<unknown[]> {
  const url = category
    ? `${API_BASE}/api/menu/${category}`
    : `${API_BASE}/api/menu`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) throw new Error("Failed to load menu");

  return res.json() as Promise<unknown[]>;
}
