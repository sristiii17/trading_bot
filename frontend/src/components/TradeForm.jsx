import { useState } from "react";
import api from "../services/api";

export default function TradeForm() {
  const [symbol, setSymbol] = useState("BTCUSDT");
  const [side, setSide] = useState("BUY");
  const [orderType, setOrderType] = useState("MARKET");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trade = {
      symbol,
      side,
      orderType,
      quantity,
      price,
    };

    try {
      const response = await api.post("/trade", trade);

      alert(response.data.message);
      console.log(response.data);

      // Clear inputs after successful trade
      setQuantity("");
      setPrice("");

    } catch (error) {
      console.error(error);
      alert("Cannot connect to backend.");
    }
  };

  return (
    <div className="bg-[#1F1F1F] border border-[#2A2A2A] rounded-xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Place New Trade
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Symbol */}
        <div>
          <label className="block mb-2 text-gray-400">
            Symbol
          </label>

          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full bg-[#111111] border border-[#333] rounded-lg p-3 text-white"
          >
            <option value="BTCUSDT">BTCUSDT</option>
            <option value="ETHUSDT">ETHUSDT</option>
            <option value="BNBUSDT">BNBUSDT</option>
            <option value="SOLUSDT">SOLUSDT</option>
          </select>
        </div>

        {/* Side */}
        <div>
          <label className="block mb-2 text-gray-400">
            Side
          </label>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setSide("BUY")}
              className={`flex-1 rounded-lg p-3 font-semibold transition ${
                side === "BUY"
                  ? "bg-green-600 text-white"
                  : "bg-[#111111] text-white hover:bg-[#222]"
              }`}
            >
              BUY
            </button>

            <button
              type="button"
              onClick={() => setSide("SELL")}
              className={`flex-1 rounded-lg p-3 font-semibold transition ${
                side === "SELL"
                  ? "bg-red-600 text-white"
                  : "bg-[#111111] text-white hover:bg-[#222]"
              }`}
            >
              SELL
            </button>
          </div>
        </div>

        {/* Order Type */}
        <div>
          <label className="block mb-2 text-gray-400">
            Order Type
          </label>

          <select
            value={orderType}
            onChange={(e) => setOrderType(e.target.value)}
            className="w-full bg-[#111111] border border-[#333] rounded-lg p-3 text-white"
          >
            <option value="MARKET">MARKET</option>
            <option value="LIMIT">LIMIT</option>
          </select>
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-2 text-gray-400">
            Quantity
          </label>

          <input
            type="number"
            step="0.001"
            placeholder="0.01"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full bg-[#111111] border border-[#333] rounded-lg p-3 text-white"
            required
          />
        </div>

        {/* Price (only for LIMIT orders) */}
        {orderType === "LIMIT" && (
          <div>
            <label className="block mb-2 text-gray-400">
              Price
            </label>

            <input
              type="number"
              placeholder="117000"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-[#111111] border border-[#333] rounded-lg p-3 text-white"
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-lg p-3 transition"
        >
          Execute Trade
        </button>

      </form>
    </div>
  );
}