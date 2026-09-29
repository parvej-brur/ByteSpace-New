import { type FieldErrors, validateEmail, validatePassword } from "./fields.schema";

export type LoginValues = { email: string; password: string };

export function loginSchema(values: LoginValues): FieldErrors<keyof LoginValues> {
  return {
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  };
}
