import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function SeemaMena() {
  const fields = [
    { name: "cash", label: "نقدي", type: "number" },
    { name: "robna_karam", label: "ربنا كرم", type: "number" },
    { name: "withdraw", label: "سحب", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return (
    <AdvancedSubCRUD
      branchId="seema"
      dataKey="mena_seema"
      title="حسابات مينا ناصر — سنتر سيما"
      fields={fields}
      numericFields={["cash", "robna_karam", "withdraw"]}
    />
  );
}
