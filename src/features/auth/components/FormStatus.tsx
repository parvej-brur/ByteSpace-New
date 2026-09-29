export function FormStatus({ message }: { message: string }) {
  return (
    <p role="status" className="text-body-m text-shuttle-gray-700">
      {message}
    </p>
  );
}
