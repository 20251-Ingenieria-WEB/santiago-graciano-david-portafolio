import { Heading } from "../atoms/Heading";
import { Text } from "../atoms/Text";
export function ContactCard({ location, phone, email }: { location: string; phone: string; email: string }) {
  return (
    <div className="space-y-1">
      <Heading level={3}>Contacto</Heading>
      <Text>{location}</Text>
      <Text>{phone}</Text>
      <Text>{email}</Text>
    </div>
  );
}