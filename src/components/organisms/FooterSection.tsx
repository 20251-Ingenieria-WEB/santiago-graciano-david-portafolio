import { Text } from "../atoms/Text";
export default function FooterSection() {
  return (
    <footer className="py-6 text-center text-xs text-slate-500">
      <Text>© {new Date().getFullYear()} Santiago Graciano. Todos los derechos reservados.</Text>
    </footer>
  );
}