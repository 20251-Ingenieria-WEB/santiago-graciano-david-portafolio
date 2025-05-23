export function SkillList({ skills }: { skills: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-2 py-1 text-xs bg-slate-200 rounded-full">{skill}</span>
      ))}
    </div>
  );
}