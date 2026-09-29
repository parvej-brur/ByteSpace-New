"use client";

import Link from "next/link";
import { type FormEvent, useState } from "react";
import { type LoginValues, loginSchema } from "../schemas/login.schema";
import { FormStatus } from "./FormStatus";
import { SocialButtons } from "./SocialButtons";
import { TextField } from "./TextField";

type Errors = ReturnType<typeof loginSchema>;

export function LoginForm() {
  const [values, setValues] = useState<LoginValues>({ email: "", password: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof LoginValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = loginSchema(values);
    setErrors(result);
    setSubmitted(!Object.values(result).some(Boolean));
  }

  return (
    <div className="flex flex-col gap-16 lg:h-170.75 lg:justify-between lg:gap-0">
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-10">
        <div>
          <p className="text-body-l text-persian-blue-800">Sign In</p>
          <h1 className="font-heading text-3xl leading-[1.2] font-semibold tracking-[-0.01em] text-shuttle-gray-950 sm:text-heading-m">
            Welcome Back
          </h1>
        </div>
        <div className="flex flex-col gap-6">
          <TextField
            id="login-email"
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
            id="login-password"
            name="password"
            type="password"
            label="Password"
            autoComplete="current-password"
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
              Sign In
            </button>
            {submitted && <FormStatus message="Details look good. Sign-in is not connected in this demo." />}
          </div>
        </div>
      </form>

      <SocialButtons />

      <p className="text-center text-body-m leading-[25.6px] text-muted">
        New user?{" "}
        <Link href="/register" className="rounded-sm text-persian-blue-800 focus-visible:outline-2">
          Create an account
        </Link>
      </p>
    </div>
  );
}
