import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";
import { auth } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const  session  = await auth();

  if(!session){
    redirect("/login");
  }
  return (
   <main className="flex h-screen overflow-hidden">
  <div className="px-4">
    <Sidebar />
  </div>
  <div className="bg-gray-100 flex flex-col flex-1 overflow-hidden">
    <div className="flex-shrink-0">
      <Header />
    </div>
    <div className="flex-1 overflow-y-auto px-5">
      <Hero />
    </div>
  </div>
</main>
  );
}
