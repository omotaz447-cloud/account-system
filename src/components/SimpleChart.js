import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function SimpleChart({ sales }) {
  const labels = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toLocaleDateString();
  });

  const dataByDay = labels.map(lbl =>
    sales
      .filter(s => new Date(s.date).toLocaleDateString() === lbl)
      .reduce((sum, s) => sum + (s.amount || 0), 0)
  );

  return (
    <div className="card">
      <div style={{ fontWeight: 700, marginBottom: 8 }}>مخطط المبيعات (7 أيام)</div>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: "المبيعات",
              data: dataByDay,
              backgroundColor: "rgba(14,165,233,0.6)"
            }
          ]
        }}
      />
    </div>
  );
}
