// src/pages/garga/GargaWorkersMall.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function GargaWorkersMall() {
  const fields = [
    { name: "name", label: "اسم العامل", type: "text" },
    { name: "day", label: "اليوم", type: "text" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "withdraw", label: "السحب", type: "number" },
  ];
  return <AdvancedSubCRUD branchId="garga" dataKey="workers" title="حسابات عمال جرجا — معرض مول العرب" fields={fields} numericFields={["withdraw"]}  enableAttendance={true} />;
}
