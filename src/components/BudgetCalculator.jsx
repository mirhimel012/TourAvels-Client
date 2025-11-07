import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";

const BudgetCalculator = () => {
  const [costs, setCosts] = useState({ transport: "", hotel: "", food: "", misc: "" });
  const [total, setTotal] = useState(0);
  const [displayedTotal, setDisplayedTotal] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const animationRef = useRef();

  const handleChange = (e) => {
    setCosts({ ...costs, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const newTotal =
      Number(costs.transport || 0) +
      Number(costs.hotel || 0) +
      Number(costs.food || 0) +
      Number(costs.misc || 0);

    setTotal(newTotal);
    setShowConfetti(newTotal >= 30000);

    cancelAnimationFrame(animationRef.current);

    const step = () => {
      if (displayedTotal < newTotal) {
        setDisplayedTotal((prev) => {
          const next = prev + Math.ceil((newTotal - prev) / 5);
          if (next >= newTotal) return newTotal;
          return next;
        });
      } else if (displayedTotal > newTotal) {
        setDisplayedTotal((prev) => {
          const next = prev - Math.ceil((prev - newTotal) / 5);
          if (next <= newTotal) return newTotal;
          return next;
        });
      }
      if (displayedTotal !== newTotal) {
        animationRef.current = requestAnimationFrame(step);
      }
    };

    animationRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationRef.current);
  }, [costs, total, displayedTotal]);

  // Feedback in Bangla
  const feedback =
    total === 0
      ? "🚀 খরচ লিখে শুরু করো!"
      : total <= 2000
      ? "😆 বাজেট খুব কম, সমুদ্র সৈকত? শুধু স্বপ্নে!"
      : total <= 10000
      ? "💸 দারুণ! সাশ্রয়ী ট্রাভেলার তুমি!"
      : total <= 30000
      ? "🙂 সুন্দর বাজেট, ট্রিপটি আরামদায়ক হবে!"
      : "🎉 বাজেট অনেক বড়, লাক্সারি ট্রিপ উপভোগ করো!";

  return (
    <div className="card bg-base-100 shadow-xl p-6 relative overflow-hidden">
      {showConfetti && <Confetti numberOfPieces={200} recycle={false} />}
      <h2 className="text-2xl font-bold mb-4 text-primary animate-pulse">
        💰 Finance Minister of your Trip
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: "transport", emoji: "🚗", label: "ট্রান্সপোর্ট" },
          { name: "hotel", emoji: "🏨", label: "হোটেল" },
          { name: "food", emoji: "🍔", label: "খাবার" },
          { name: "misc", emoji: "🎉", label: "অতিরিক্ত" },
        ].map((item) => (
          <input
            key={item.name}
            type="number"
            name={item.name}
            placeholder={`${item.emoji} ${item.label} খরচ`}
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        ))}
      </div>

      <p className="mt-4 text-lg font-bold text-green-600 animate-bounce">
        মোট আনুমানিক খরচ: <span className="text-primary">{displayedTotal}৳</span>
      </p>

      <p className="mt-2 text-sm text-gray-600 italic">{feedback}</p>

      <div className="mt-4 bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-green-500 h-4 transition-all duration-500"
          style={{ width: `${Math.min((total / 30000) * 100, 100)}%` }}
        ></div>
      </div>
      <p className="text-xs text-gray-400 mt-1">লক্ষ্য বাজেট: 30,000৳</p>
    </div>
  );
};

export default BudgetCalculator;
