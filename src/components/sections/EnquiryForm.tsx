"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { fadeIn } from "@/lib/animations";
import {
  budgets,
  enquirySchema,
  projectTypes,
  type EnquiryFormValues,
} from "@/lib/enquirySchema";

const inputClasses =
  "w-full rounded border border-[var(--color-border)] bg-transparent px-4 py-3 text-body-copy text-[var(--color-text-primary)] outline-none transition-colors duration-300 placeholder:text-[var(--color-text-secondary)]/60 focus:border-[var(--color-accent)]";

function Required() {
  return (
    <span aria-hidden className="text-[var(--color-accent)]">
      {" "}
      *
    </span>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return <p className="mt-1.5 text-[0.7rem] text-[var(--color-accent-dark)]">{message}</p>;
}

function FieldHint({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[0.7rem] text-[var(--color-text-secondary)]">{children}</p>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-caption-label text-[var(--color-accent)]">{children}</p>;
}

export default function EnquiryForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<EnquiryFormValues>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: undefined,
      projectLocation: "",
      budget: "",
      description: "",
      referral: "",
    },
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
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-6">
          <GroupLabel>Your Details</GroupLabel>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-caption-label" htmlFor="name">
                Your name
                <Required />
              </label>
              <input
                id="name"
                placeholder="e.g. Jane Smith"
                className={`${inputClasses} mt-2`}
                {...register("name")}
              />
              <FieldError message={errors.name?.message} />
            </div>

            <div>
              <label className="text-caption-label" htmlFor="email">
                Your email
                <Required />
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className={`${inputClasses} mt-2`}
                {...register("email")}
              />
              <FieldError message={errors.email?.message} />
            </div>
          </div>

          <div className="md:max-w-[calc(50%-0.75rem)]">
            <label className="text-caption-label" htmlFor="phone">
              Phone (optional)
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="07000 000000"
              className={`${inputClasses} mt-2`}
              {...register("phone")}
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-[var(--color-border)] pt-10">
          <GroupLabel>About the Project</GroupLabel>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-caption-label" htmlFor="projectType">
                What kind of project is this?
                <Required />
              </label>
              <div className="mt-2">
                <Controller
                  control={control}
                  name="projectType"
                  render={({ field }) => (
                    <Select
                      id="projectType"
                      value={field.value ?? ""}
                      onChange={field.onChange}
                      options={projectTypes}
                      placeholder="Select one"
                      invalid={!!errors.projectType}
                    />
                  )}
                />
              </div>
              <FieldError message={errors.projectType?.message} />
            </div>

            <div>
              <label className="text-caption-label" htmlFor="projectLocation">
                Where&rsquo;s the project?
                <Required />
              </label>
              <input
                id="projectLocation"
                placeholder="e.g. Kelvinside, Glasgow"
                className={`${inputClasses} mt-2`}
                {...register("projectLocation")}
              />
              <FieldError message={errors.projectLocation?.message} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-[var(--color-border)] pt-10">
          <GroupLabel>The Details</GroupLabel>

          <div>
            <label className="text-caption-label" htmlFor="description">
              Tell us about your project
              <Required />
            </label>
            <FieldHint>
              The more you share, the better we can prepare for our first conversation.
            </FieldHint>
            <textarea
              id="description"
              rows={4}
              placeholder="The space, what's not working, and what you're hoping for..."
              className={inputClasses}
              {...register("description")}
            />
            <FieldError message={errors.description?.message} />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="text-caption-label" htmlFor="budget">
                Approximate budget (optional)
              </label>
              <FieldHint>This just helps us tailor ideas — entirely optional.</FieldHint>
              <Controller
                control={control}
                name="budget"
                render={({ field }) => (
                  <Select
                    id="budget"
                    value={field.value ?? ""}
                    onChange={field.onChange}
                    options={budgets}
                    placeholder="Select a range"
                  />
                )}
              />
            </div>

            <div>
              <label className="text-caption-label" htmlFor="referral">
                How did you hear about us? (optional)
              </label>
              <input
                id="referral"
                placeholder="Instagram, a friend, Google..."
                className={`${inputClasses} mt-2`}
                {...register("referral")}
              />
            </div>
          </div>
        </div>

        {status === "error" && (
          <p className="text-[0.75rem] text-[var(--color-accent-dark)]">
            Something went wrong sending your enquiry. Please try again, or email us directly.
          </p>
        )}

        <div className="flex flex-col-reverse items-stretch gap-4 pt-4 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => reset()}
            className="text-caption-label text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
          >
            Clear form
          </button>
          <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
            {status === "submitting" ? "Sending…" : "Send Enquiry"}
          </Button>
        </div>
      </motion.form>
    </AnimatePresence>
  );
}
