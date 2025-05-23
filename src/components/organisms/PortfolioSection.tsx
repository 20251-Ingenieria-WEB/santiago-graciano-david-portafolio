import { projects } from "../../lib/data";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import Image from "next/image";
export default function PortfolioSection() {
  return (
    <section id="portafolio" className="space-y-4 mb-10">
      <Heading level={2}>Portafolio</Heading>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {projects.map(prj => (
          <div key={prj.id} className="min-w-[260px] bg-white rounded-xl shadow-sm p-4 flex-shrink-0">
            <Image src={prj.image} alt={prj.title} width={240} height={140} className="rounded-md mb-2" />
            <Heading level={3}>{prj.title}</Heading>
            <Text>{prj.description}</Text>
            <a href={prj.url} target="_blank" rel="noopener" className="text-sky-600 text-sm font-semibold">Saber más →</a>
          </div>
        ))}
      </div>
    </section>
  );
}