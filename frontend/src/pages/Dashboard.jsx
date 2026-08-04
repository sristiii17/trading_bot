import StatsCard from "../components/StatsCard";
import TradeForm from "../components/TradeForm";
import OrderTable from "../components/OrderTable";

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">
        Binance Futures Dashboard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-6">
        <StatsCard
          title="Balance"
          value="$10,000"
          color="#F0B90B"
        />

        <StatsCard
          title="BTC Price"
          value="$117,800"
          color="#22c55e"
        />

        <StatsCard
          title="Today's PnL"
          value="+$253"
          color="#22c55e"
        />
      </div>

      {/* Trade Form */}
      <div className="grid grid-cols-2 gap-6 mt-8">
  <TradeForm />
  <OrderTable />
</div>
    </div>
  );
}