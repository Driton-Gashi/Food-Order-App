import Header from "../components/dashboard/Header";
import Sidebar from "../components/dashboard/Sidebar";
import type { layoutType } from "../utils/types";

export default function DashboardLayout({
  children,
}: layoutType) {
  return (
    <div className="relative min-h-screen">
      <Header className="z-[2] fixed right-0 top-0 left-[30vw] py-3 px-4 h-16 border-b bg-white"/>
      <Sidebar className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-[30vw]" />
      <div className="flex min-h-full flex-1 flex-col justify-center pr-6 ml-[30vw] py-16 lg:px-4 w-[68vw]">
      {children}
      </div>
    </div>
  );
}
