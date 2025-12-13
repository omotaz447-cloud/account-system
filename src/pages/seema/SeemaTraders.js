// src/pages/seema/SeemaTraders.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function SeemaTraders() {
  const fields = [
    { name: "name", label: "اسم التاجر", type: "text" },
    { name: "invoice", label: "الفاتورة", type: "number" },
    { name: "payment", label: "الدفعة", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];

  return (
    <AdvancedSubCRUD
      branchId="seema"
      dataKey="traders"
      title="حسابات تجار سنتر سيما"
      fields={fields}
      numericFields={["invoice", "payment"]}
    />
  );
}
