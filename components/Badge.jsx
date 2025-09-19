export default function Badge({ children }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}
