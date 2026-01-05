import * as yup from "yup";

export const jobSchema = yup.object({
  title: yup.string().required(),
  company: yup.string().required(),

  jobType: yup
    .string()
    .oneOf(["Full-time", "Part-time", "Internship"])
    .required(),

  workMode: yup
    .string()
    .oneOf(["Remote", "Hybrid", "On-site"])
    .required(),

  location: yup.string().required(),
  description: yup.string().min(10).required(),

  applyLink: yup
  .string()
  .transform((value) => (value === "" ? null : value))
  .url("Enter a valid URL")
  .nullable(),

applyEmail: yup
  .string()
  .transform((value) => (value === "" ? null : value))
  .email("Enter a valid email")
  .nullable(),

applyPhone: yup
  .string()
  .transform((value) => (value === "" ? null : value))
  .min(10, "Phone number must be 10 digits")
  .nullable(),


  deadline: yup
  .date()
  .transform((value, originalValue) =>
    originalValue === "" ? null : value
  )
  .nullable(),

})
.test(
  "at-least-one-apply",
  "Provide at least one apply method (link, email, or phone)",
  (value) =>
    !!(value.applyLink || value.applyEmail || value.applyPhone)
);
