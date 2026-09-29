"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { type RegisterValues, registerSchema } from "../schemas/register.schema";
import { FormStatus } from "./FormStatus";
import { TextField } from "./TextField";

type Errors = ReturnType<typeof registerSchema>;

export function RegisterForm() {
  const [values, setValues] = useState<RegisterValues>({ fullName: "", email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof RegisterValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = registerSchema(values);
    setErrors(result);
    setSubmitted(!Object.values(result).some(Boolean));
  }

  return (
    <div className="flex flex-col gap-16 lg:gap-31">
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-persian-blue-800">Create an Account</p>
          <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950 sm:text-heading-m">
            Welcome to ByteSpace
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <TextField
            id="register-name"
            name="fullName"
            label="Full Name"
            autoComplete="name"
            placeholder="Jamie Davis"
            value={values.fullName}
            error={errors.fullName}
            onChange={(event) => update("fullName", event.target.value)}
          />
          <TextField
            id="register-email"
            name="email"
            type="email"
            label="Email"
            autoComplete="email"
            placeholder="designer@example.com"
            value={values.email}
            error={errors.email}
            onChange={(event) => update("email", event.target.value)}
          />
          <TextField
            id="register-password"
            name="password"
            type="password"
            label="Password"
            autoComplete="new-password"
            placeholder="********"
            value={values.password}
            error={errors.password}
            onChange={(event) => update("password", event.target.value)}
          />
          <div className="flex flex-col items-end gap-4">
            <button
              type="submit"
              className="cursor-pointer rounded-3xl bg-electric-lime-400 px-6 py-3 text-label-l text-shuttle-gray-950 outline-offset-2 focus-visible:outline-2 focus-visible:outline-persian-blue-800"
            >
              Continue
            </button>
            {submitted && <FormStatus message="Details look good. Sign-up is not connected in this demo." />}
          </div>
        </div>
      </form>

      <p className="text-center text-body-m leading-[25.6px] text-shuttle-gray-700">
        Already have an account?{" "}
        <Link href="/login" className="rounded-sm text-persian-blue-800 focus-visible:outline-2">
          Login
        </Link>
      </p>
    </div>
  );
}
