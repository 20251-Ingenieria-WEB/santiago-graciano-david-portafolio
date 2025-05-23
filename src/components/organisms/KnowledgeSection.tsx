import { knowledge } from "../../lib/data";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
export default function KnowledgeSection() {
  return (
    <section id="conocimientos" className="space-y-4 mb-10">
      <Heading level={2}>Conocimientos</Heading>
      <div className="grid gap-4 md:grid-cols-2">
        {knowledge.map(k => (
          <div key={k.title} className="p-4 bg-white rounded-xl shadow-sm">
            <div className="text-3xl mb-2">{k.icon}</div>
            <Heading level={3}>{k.title}</Heading>
            <Text>{k.description}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}