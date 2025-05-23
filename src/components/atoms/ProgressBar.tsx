export function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full h-2 bg-slate-200 rounded">
      <div style={{ width: `${value}%` }} className="h-full rounded bg-sky-500" />
    </div>
  );
}