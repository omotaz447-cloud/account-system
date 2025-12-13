// src/pages/dalaa/DalaaTraders.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function DalaaTraders() {
  const fields = [
    { name: "name", label: "اسم التاجر", type: "text" },
    { name: "invoice", label: "الفاتورة", type: "number" },
    { name: "payment", label: "الدفعة", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return <AdvancedSubCRUD branchId="dalaa" dataKey="traders" title="حسابات تجار سنتر دلع الهوانم" fields={fields} numericFields={["invoice","payment"]} />;
}
