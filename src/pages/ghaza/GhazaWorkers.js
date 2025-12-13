// src/pages/ghaza/GhazaWorkers.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function GhazaWorkers() {
  const fields = [
    { name: "name", label: "اسم العامل", type: "text" },
    { name: "day", label: "اليوم", type: "text" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "withdraw", label: "السحب", type: "number" },
  ];
  return <AdvancedSubCRUD branchId="ghaza" dataKey="workers" title="حسابات عمال سنتر غزه" fields={fields} numericFields={["withdraw"]} />;
}
