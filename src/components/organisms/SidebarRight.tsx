import { IconLink } from "../atoms/IconLink";
import { Github, Linkedin } from "lucide-react";
export default function SidebarRight() {
  return (
    <nav className="flex flex-col items-center gap-4">
      <IconLink href="https://github.com/usuario" icon={Github} label="GitHub" />
      <IconLink href="https://linkedin.com/in/usuario" icon={Linkedin} label="LinkedIn" />
    </nav>
  );
}