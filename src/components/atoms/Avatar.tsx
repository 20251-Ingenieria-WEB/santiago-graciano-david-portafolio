import Image from "next/image";
export default function Avatar({ src, alt, size = 96 }: { src: string; alt: string; size?: number }) {
  return (
    <Image src={src} alt={alt} width={size} height={size} className="rounded-full object-cover" />
  );
}