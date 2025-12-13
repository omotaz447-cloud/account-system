import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function GhazaMenaWahid() {
  const fields = [
    { name: "cash", label: "نقدي", type: "number" },
    { name: "robna_karam", label: "ربنا كرم", type: "number" },
    { name: "withdraw", label: "سحب", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return (
    <AdvancedSubCRUD
      branchId="ghaza"
      dataKey="mena_wahid_ghaza"
      title="حسابات مينا ناصر عند وحيد — سنتر غزه"
      fields={fields}
      numericFields={["cash", "robna_karam", "withdraw"]}
    />
  );
}
