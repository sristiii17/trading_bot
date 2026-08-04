export default function StatsCard({ title, value, color }) {
    return (
    <div className="bg-[#1F1F1F] border border-[#2A2A2A] rounded-xl p-6 shadow-lg transition hover:scale-[1.02]">
        <p className="text-sm text-gray-400">{title}</p>

        <h2
        className="text-3xl font-bold mt-2"
        style={{ color: color }}
        >
        {value}
        </h2>
    </div>
    );
}