import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function BelinaWahid() {
  const fields = [
    { name: "cash", label: "نقدي", type: "number" },
    { name: "robna_karam", label: "ربنا كرم", type: "number" },
    { name: "withdraw", label: "سحب", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return <AdvancedSubCRUD branchId="belina" dataKey="wahid" title="حسابات وحيد سعيد — البلينا" fields={fields} numericFields={["cash","robna_karam","withdraw"]} />;
}
