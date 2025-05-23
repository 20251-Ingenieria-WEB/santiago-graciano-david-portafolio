import { Icon } from "lucide-react";
export function IconLink({ href, icon: IconCmp, label }: { href: string; icon: Icon; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener" aria-label={label} className="p-2 hover:text-sky-600 transition-colors">
      <IconCmp size={20} />
    </a>
  );
}