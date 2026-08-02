"use client";

import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: readonly string[];
  placeholder: string;
  id?: string;
  invalid?: boolean;
}

export default function Select({ value, onChange, options, placeholder, id, invalid }: SelectProps) {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="relative">
        <ListboxButton
          id={id}
          aria-invalid={invalid || undefined}
          className={`flex w-full items-center justify-between rounded border bg-transparent px-4 py-3 text-left text-body-copy outline-none transition-colors duration-300 ${
            invalid ? "border-[var(--color-accent-dark)]" : "border-[var(--color-border)]"
          } hover:border-[var(--color-accent)] data-[open]:border-[var(--color-accent)]`}
        >
          <span
            className={value ? "text-[var(--color-text-primary)]" : "text-[var(--color-text-secondary)]"}
          >
            {value || placeholder}
          </span>
          <svg
            aria-hidden
            className="h-3 w-3 shrink-0 text-[var(--color-text-secondary)] transition-transform duration-300 data-[open]:rotate-180"
            viewBox="0 0 12 8"
            fill="none"
          >
            <path
              d="M1 1l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded border border-[var(--color-border)] bg-[var(--color-bg-primary)] py-1 shadow-lg outline-none transition duration-150 ease-out data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {options.map((option) => (
            <ListboxOption
              key={option}
              value={option}
              className="cursor-pointer px-4 py-2.5 text-body-copy text-[var(--color-text-primary)] data-[focus]:bg-[var(--color-accent)] data-[focus]:text-[var(--color-text-inverse)] data-[selected]:font-medium"
            >
              {option}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
