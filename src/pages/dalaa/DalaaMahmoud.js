// src/pages/dalaa/DalaaMahmoud.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function DalaaMahmoud() {
  const fields = [
    { name: "cash", label: "نقدي", type: "number" },
    { name: "robna_karam", label: "ربنا كرم", type: "number" },
    { name: "withdraw", label: "سحب", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return <AdvancedSubCRUD branchId="dalaa" dataKey="mahmoud_dalaa" title="حسابات محمود موهوب — دلع الهوانم" fields={fields} numericFields={["cash","robna_karam","withdraw"]} />;
}
