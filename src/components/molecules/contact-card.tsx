import { Heading } from "../atoms/heading";
import { Text } from "../atoms/text";
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