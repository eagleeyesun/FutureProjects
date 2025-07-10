import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex p-2 w-screen h-screen">
      <div className="px-5">
        <Sidebar />
      </div>
      <div className="bg-gray-100 flex flex-col flex-1">
        <div>

          <Header />
        </div>
        <div className="mx-5">

          <Hero />
        </div>
      </div>
    </main>
  );
}
