import { LayoutDashboard, BarChart3, History, Settings } from "lucide-react";

export default function Sidebar() {
    return (
    <aside className="w-64 bg-[#111111] border-r border-[#2A2A2A] text-white h-screen p-6">
        <h1 className="text-2xl font-bold text-yellow-400 mb-10">
        Trading Bot
        </h1>

        <nav className="space-y-5">

        <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <LayoutDashboard size={20} />
            Dashboard
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <BarChart3 size={20} />
            Trade
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <History size={20} />
            Orders
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-yellow-400">
            <Settings size={20} />
            Settings
        </div>

        </nav>
    </aside>
    );
}