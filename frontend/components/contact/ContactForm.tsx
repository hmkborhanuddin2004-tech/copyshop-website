"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import type { ContactFormData } from "@/lib/types";
import { submitContactForm } from "@/lib/api/contact";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

type FormSchema = z.infer<typeof schema>;

type Status = "idle" | "loading" | "success" | "error";

const FIELD_CLASS =
  "w-full px-4 py-3 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-foreground)] text-sm placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-150";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    setErrorMsg("");
    try {
      await submitContactForm(data);
      setStatus("success");
      reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="warm-card p-10 text-center" role="status" aria-live="polite">
        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" aria-hidden="true" />
        <h3 className="text-[var(--color-primary)] text-xl mb-2" style={{ fontFamily: "var(--font-heading)" }}>
          Message Sent!
        </h3>
        <p className="text-[var(--color-muted)] text-sm mb-6">
          Thank you! We&rsquo;ll get back to you within one business day.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="btn-primary">
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Contact form"
      className="warm-card p-8 space-y-5"
    >
      {/* Error banner */}
      {status === "error" && (
        <div role="alert" className="flex items-start gap-2.5 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
          <AlertCircle size={16} className="shrink-0 mt-0.5" aria-hidden="true" />
          {errorMsg || "Failed to send. Please try again."}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
          Your Name <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input id="name" type="text" autoComplete="name" placeholder="Jane Smith"
          className={FIELD_CLASS} aria-describedby={errors.name ? "name-error" : undefined}
          aria-invalid={!!errors.name} {...register("name")} />
        {errors.name && <p id="name-error" role="alert" className="mt-1.5 text-red-500 text-xs">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
          Email Address <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input id="email" type="email" autoComplete="email" placeholder="jane@example.com"
          className={FIELD_CLASS} aria-describedby={errors.email ? "email-error" : undefined}
          aria-invalid={!!errors.email} {...register("email")} />
        {errors.email && <p id="email-error" role="alert" className="mt-1.5 text-red-500 text-xs">{errors.email.message}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
          Subject <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input id="subject" type="text" placeholder="Reservation enquiry"
          className={FIELD_CLASS} aria-describedby={errors.subject ? "subject-error" : undefined}
          aria-invalid={!!errors.subject} {...register("subject")} />
        {errors.subject && <p id="subject-error" role="alert" className="mt-1.5 text-red-500 text-xs">{errors.subject.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--color-foreground)] mb-1.5">
          Message <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <textarea id="message" rows={5} placeholder="Write your message here..."
          className={`${FIELD_CLASS} resize-y min-h-[120px]`}
          aria-describedby={errors.message ? "message-error" : undefined}
          aria-invalid={!!errors.message} {...register("message")} />
        {errors.message && <p id="message-error" role="alert" className="mt-1.5 text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed">
        {status === "loading" ? (
          <><Loader2 size={17} className="animate-spin" aria-hidden="true" /> Sending…</>
        ) : (
          <><Send size={17} aria-hidden="true" /> Send Message</>
        )}
      </button>
    </form>
  );
}
