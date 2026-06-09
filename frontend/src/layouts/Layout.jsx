import Sidebar from "../components/Sidebar";
import TabBar from "../components/TabBar";

export default function Layout({ children }) {
  return (
    <div className="relative w-full h-screen bg-main flex flex-row overflow-hidden">
      <Sidebar />
      <TabBar />
      <main className="relative flex-1 pb-20 sm:pb-0 overflow-y-auto p-4">
        {children}
      </main>
    </div>
  );
}
