import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function GargaWahid() {
  const fields = [
    { name: "cash", label: "نقدي", type: "number" },
    { name: "robna_karam", label: "ربنا كرم", type: "number" },
    { name: "withdraw", label: "سحب", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return (
    <AdvancedSubCRUD
      branchId="garga"
      dataKey="wahid_garga"
      title="حسابات وحيد سعيد — جرجا"
      fields={fields}
      numericFields={["cash", "robna_karam", "withdraw"]}
    />
  );
}
