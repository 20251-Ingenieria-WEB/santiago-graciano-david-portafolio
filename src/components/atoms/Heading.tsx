export function Heading({ level = 1, children }: { level?: 1 | 2 | 3 | 4 | 5 | 6; children: React.ReactNode }) {
  const Tag = `h${level}` as const;
  return <Tag className="font-semibold text-slate-800 mb-2 text-lg lg:text-xl">{children}</Tag>;
}