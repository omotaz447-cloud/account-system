// src/pages/seema/SeemaWorkers.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function SeemaWorkers() {
  const fields = [
    { name: "name", label: "اسم العامل", type: "text" },
    { name: "day", label: "اليوم", type: "text" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "withdraw", label: "السحب", type: "number" },
  ];

  return (
    <AdvancedSubCRUD
      branchId="seema"
      dataKey="workers"
      title="حسابات عمال سنتر سيما"
      fields={fields}
      numericFields={["withdraw"]}
       enableAttendance={true}
    />
  );
}
