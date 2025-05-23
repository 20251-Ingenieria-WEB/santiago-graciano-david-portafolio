import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { ProgressBar } from "../atoms/ProgressBar";

export function ProgrammingCard({ stacks }: { stacks: typeof import("../../lib/data").programming }) {
  return (
    <div>
      <Heading level={3}>Lenguajes de Programación</Heading>
      <div className="space-y-2">
        {stacks.map(s => (
          <div key={s.name} className="space-y-1">
            <Text>{s.name}</Text>
            <ProgressBar value={s.percent} />
          </div>
        ))}
      </div>
    </div>
  );
}