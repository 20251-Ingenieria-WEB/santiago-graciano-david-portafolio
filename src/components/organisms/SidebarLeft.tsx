import Avatar from "../atoms/Avatar";
import { personal, languages, programming, skills } from "../../lib/data";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { ContactCard } from "../molecules/ContactCard";
import { LanguageCard } from "../molecules/LanguageCard";
import { ProgrammingCard } from "../molecules/ProgrammingCard";
import { SkillList } from "../molecules/SkillList";

export default function SidebarLeft() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center text-center">
        <Avatar src={personal.avatar} alt={personal.name} size={120} />
        <Heading level={2}>{personal.name}</Heading>
        <Text>{personal.title}</Text>
      </div>

      <ContactCard location={personal.location} phone={personal.phone} email={personal.email} />
      <LanguageCard languages={languages} />
      <ProgrammingCard stacks={programming} />
      <div>
        <Heading level={3}>Habilidades</Heading>
        <SkillList skills={skills} />
      </div>
    </div>
  );
}