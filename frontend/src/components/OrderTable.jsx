export default function OrderTable() {
  const orders = [
    {
      symbol: "BTCUSDT",
      side: "BUY",
      qty: 0.02,
      status: "Filled",
    },
    {
      symbol: "ETHUSDT",
      side: "SELL",
      qty: 1.1,
      status: "Pending",
    },
  ];

  return (
    <div className="bg-[#1F1F1F] border border-[#2A2A2A] rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-5">
        Recent Orders
      </h2>

      <table className="w-full text-left">
        <thead className="text-gray-400">
          <tr>
            <th className="pb-3">Symbol</th>
            <th>Side</th>
            <th>Qty</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order, index) => (
            <tr
              key={index}
              className="border-t border-[#333]"
            >
              <td className="py-4">{order.symbol}</td>

              <td
                className={
                  order.side === "BUY"
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {order.side}
              </td>

              <td>{order.qty}</td>

              <td>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}