import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function SeemaMilad() {
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
      dataKey="milad_seema"
      title="حسابات ميلاد — سنتر سيما"
      fields={fields}
      numericFields={["cash", "robna_karam", "withdraw"]}
    />
  );
}
