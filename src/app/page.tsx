import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import StateSection from "./components/StateSection";
import TaskSection from "./components/TaskSection/TaskSection";

export default function Home() {
  return (
    <main className="bg-[#0e0c21] ">
      <div className=" fixed hidden lg:block">
        <Sidebar />
      </div>
      <div className="lg:pl-72">
        <Navbar />
        <StateSection />
        <TaskSection />
      </div>
    </main>
  );
}
