import { education } from "../../lib/data";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
export default function EducationSection() {
  return (
    <section id="educacion" className="space-y-4 mb-10">
      <Heading level={2}>Educación</Heading>
      <div className="space-y-4">
        {education.map(ed => (
          <div key={ed.institute} className="p-4 bg-white rounded-xl shadow-sm">
            <Heading level={3}>{ed.institute}</Heading>
            <Text className="italic text-xs">{ed.period}</Text>
            <Text className="font-medium">{ed.degree}</Text>
            <Text>{ed.description}</Text>
          </div>
        ))}
      </div>
    </section>
  );
}