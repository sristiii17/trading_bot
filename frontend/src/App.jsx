import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#0D0D0D] text-white">
      <Sidebar />

      <div className="flex-1">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}