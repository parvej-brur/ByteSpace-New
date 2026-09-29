import {
  type FieldErrors,
  validateEmail,
  validateFullName,
  validatePassword,
} from "./fields.schema";

export type RegisterValues = { fullName: string; email: string; password: string };

export function registerSchema(values: RegisterValues): FieldErrors<keyof RegisterValues> {
  return {
    fullName: validateFullName(values.fullName),
    email: validateEmail(values.email),
    password: validatePassword(values.password),
  };
}
