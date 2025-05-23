import SidebarLeft from "../organisms/SidebarLeft";
import SidebarRight from "../organisms/SidebarRight";
export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen grid grid-cols-[250px_1fr_80px] overflow-hidden">
      <aside className="bg-white border-r p-4 overflow-y-auto"><SidebarLeft /></aside>
      <main className="p-6 overflow-y-scroll">{children}</main>
      <aside className="bg-white border-l p-4 flex items-center justify-center"><SidebarRight /></aside>
    </div>
  );
}