export function Text({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-snug text-slate-600">{children}</p>;
}