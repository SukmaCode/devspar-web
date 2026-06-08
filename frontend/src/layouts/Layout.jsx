import Sidebar from "../components/Sidebar";
import Topbar from "../components/TopBar";

export default function Layout({ children }) {
  return (
    <div className="relative w-full h-screen bg-bg-main flex flex-row overflow-hidden">
      <Sidebar />
      <main className="relative flex-1 overflow-y-auto p-4">
        {children}
      </main>
    </div>
  );
}
