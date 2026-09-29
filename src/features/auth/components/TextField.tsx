import type { InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export function TextField({ label, error, id, ...inputProps }: TextFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-label-s leading-[16.8px] text-shuttle-gray-950">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`h-13 w-full rounded-xl border bg-white px-6 py-3 text-body-l text-shuttle-gray-950 outline-offset-2 placeholder:text-shuttle-gray-400 focus-visible:outline-2 focus-visible:outline-persian-blue-800 ${
          error ? "border-red-600" : "border-shuttle-gray-100"
        }`}
        {...inputProps}
      />
      {error && (
        <p id={errorId} role="alert" className="text-body-s text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
