import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function GargaTradersMall() {
  const fields = [
    { name: "name", label: "اسم التاجر", type: "text" },
    { name: "invoice", label: "الفاتورة", type: "number" },
    { name: "payment", label: "الدفعة", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return <AdvancedSubCRUD branchId="garga" dataKey="traders" title="حسابات تجار جرجا — معرض مول العرب" fields={fields} numericFields={["invoice","payment"]} />;
}
