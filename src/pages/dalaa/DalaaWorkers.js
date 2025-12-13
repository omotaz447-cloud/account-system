// src/pages/dalaa/DalaaWorkers.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function DalaaWorkers() {
  const fields = [
    { name: "name", label: "اسم العامل", type: "text" },
    { name: "day", label: "اليوم", type: "text" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "withdraw", label: "السحب", type: "number" },
  ];
  return <AdvancedSubCRUD branchId="dalaa" dataKey="workers" title="حسابات عمال سنتر دلع الهوانم" fields={fields} numericFields={["withdraw"]} />;
}
