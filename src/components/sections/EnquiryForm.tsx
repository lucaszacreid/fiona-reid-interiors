"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { fadeIn } from "@/lib/animations";
import {
  budgets,
  enquirySchema,
  projectTypes,
  type EnquiryFormValues,
} from "@/lib/enquirySchema";

const inputClasses =
  "w-full border-0 border-b border-[var(--color-border)] bg-transparent py-3 text-body-copy text-[var(--color-text-primary)] outline-none transition-colors duration-300 focus:border-[var(--color-text-primary)]";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1 text-[0.7rem] text-[var(--color-accent-dark)]">{message}</p>;
}

export default function EnquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
  });

  const onSubmit = async (values: EnquiryFormValues) => {
    setStatus("submitting");
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Request failed");
      router.push(`/thank-you?name=${encodeURIComponent(values.name)}`);
    } catch {
      setStatus("error");
    }
  };

  return (
    <AnimatePresence>
      <motion.form
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="flex flex-col gap-8"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <label className="text-caption-label" htmlFor="name">
              Name *
            </label>
            <input id="name" className={inputClasses} {...register("name")} />
            <FieldError message={errors.name?.message} />
          </div>

          <div>
            <label className="text-caption-label" htmlFor="email">
              Email *
            </label>
            <input id="email" type="email" className={inputClasses} {...register("email")} />
            <FieldError message={errors.email?.message} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <label className="text-caption-label" htmlFor="phone">
              Phone (optional)
            </label>
            <input id="phone" className={inputClasses} {...register("phone")} />
          </div>

          <div>
            <label className="text-caption-label" htmlFor="projectType">
              Project Type
            </label>
            <select id="projectType" className={inputClasses} defaultValue="" {...register("projectType")}>
              <option value="" disabled>
                Select one
              </option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <FieldError message={errors.projectType?.message} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <label className="text-caption-label" htmlFor="projectLocation">
              Project Location *
            </label>
            <input id="projectLocation" className={inputClasses} {...register("projectLocation")} />
            <FieldError message={errors.projectLocation?.message} />
          </div>

          <div>
            <label className="text-caption-label" htmlFor="budget">
              Approximate Budget
            </label>
            <select id="budget" className={inputClasses} defaultValue="" {...register("budget")}>
              <option value="" disabled>
                Select a range
              </option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
            <FieldError message={errors.budget?.message} />
          </div>
        </div>

        <div>
          <label className="text-caption-label" htmlFor="description">
            Project Description *
          </label>
          <textarea
            id="description"
            rows={4}
            className={inputClasses}
            {...register("description")}
          />
          <FieldError message={errors.description?.message} />
        </div>

        <div>
          <label className="text-caption-label" htmlFor="referral">
            How did you hear about us?
          </label>
          <input id="referral" className={inputClasses} {...register("referral")} />
        </div>

        {status === "error" && (
          <p className="text-[0.75rem] text-[var(--color-accent-dark)]">
            Something went wrong sending your enquiry. Please try again, or email us directly.
          </p>
        )}

        <div className="flex justify-end pt-4">
          <Button type="submit" disabled={status === "submitting"} className="w-full md:w-auto">
            {status === "submitting" ? "Sending…" : "Send Enquiry"}
          </Button>
        </div>
      </motion.form>
    </AnimatePresence>
  );
}
