import { ProgressBar } from "../atoms/ProgressBar";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
export function LanguageCard({ languages }: { languages: typeof import("../../lib/data").languages }) {
  return (
    <div>
      <Heading level={3}>Idiomas</Heading>
      <div className="space-y-2">
        {languages.map(l => (
          <div key={l.name} className="space-y-1">
            <Text>{l.name}</Text>
            <ProgressBar value={l.percent} />
          </div>
        ))}
      </div>
    </div>
  );
}