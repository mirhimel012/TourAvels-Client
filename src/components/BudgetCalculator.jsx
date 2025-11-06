import React, { useState } from "react";

const BudgetCalculator = () => {
  const [costs, setCosts] = useState({ transport: "", hotel: "", food: "", misc: "" });

  const handleChange = (e) => {
    setCosts({ ...costs, [e.target.name]: e.target.value });
  };

  const total =
    Number(costs.transport || 0) +
    Number(costs.hotel || 0) +
    Number(costs.food || 0) +
    Number(costs.misc || 0);

  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h2 className="text-2xl font-semibold mb-4">💰 Tour Budget Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["transport","hotel","food","misc"].map((item) => (
          <input
            key={item}
            type="number"
            name={item}
            placeholder={item.charAt(0).toUpperCase() + item.slice(1) + " Cost"}
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        ))}
      </div>
      <p className="mt-4 text-lg font-medium">
        Total Estimated Cost:{" "}
        <span className="text-primary font-bold">{total}৳</span>
      </p>
    </div>
  );
};

export default BudgetCalculator;
