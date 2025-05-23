import Avatar from "../atoms/Avatar";
import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
import { personal } from "../../lib/data";
export default function ProfileSection() {
  return (
    <section id="perfil" className="space-y-4 mb-10">
      <Heading level={2}>Perfil</Heading>
      <Avatar src={personal.avatar} alt={personal.name} size={180} />
      <Text>
        Soy estudiante de Ingeniería de Sistemas apasionado por el desarrollo de software, DevOps y la
        creación de productos digitales de alto impacto.
      </Text>
      {/* TODO: botón y modal */}
    </section>
  );
}