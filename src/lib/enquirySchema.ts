import { z } from "zod";

export const projectTypes = [
  "Residential",
  "Commercial",
  "Hospitality",
  "New Build",
  "Renovation",
  "Other",
] as const;

export const budgets = [
  "Under £50k",
  "£50k–£100k",
  "£100k–£250k",
  "£250k+",
  "Prefer not to say",
] as const;

export const enquirySchema = z.object({
  name: z.string().trim().min(1, "Please tell us your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  phone: z.string().trim().optional().or(z.literal("")),
  projectType: z.enum(projectTypes, {
    errorMap: () => ({ message: "Please select a project type." }),
  }),
  projectLocation: z.string().trim().min(1, "Please tell us where the project is."),
  budget: z.union([z.enum(budgets), z.literal("")]).optional(),
  description: z.string().trim().min(1, "Please tell us a little about the project."),
  referral: z.string().trim().optional().or(z.literal("")),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
