// src/pages/ghaza/GhazaTraders.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function GhazaTraders() {
  const fields = [
    { name: "name", label: "اسم التاجر", type: "text" },
    { name: "invoice", label: "الفاتورة", type: "number" },
    { name: "payment", label: "الدفعة", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return <AdvancedSubCRUD branchId="ghaza" dataKey="traders" title="حسابات تجار سنتر غزه" fields={fields} numericFields={["invoice","payment"]} />;
}
