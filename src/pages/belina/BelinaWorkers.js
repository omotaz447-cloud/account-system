// src/pages/belina/BelinaWorkers.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function BelinaWorkers() {
  const fields = [
    { name: "name", label: "اسم العامل", type: "text" },
    { name: "day", label: "اليوم", type: "text" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "withdraw", label: "السحب", type: "number" },
  ];
  return <AdvancedSubCRUD branchId="belina" dataKey="workers" title="حساب عمال البلينا" fields={fields} numericFields={["withdraw"]} />;
}
