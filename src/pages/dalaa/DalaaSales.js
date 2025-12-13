// src/pages/dalaa/DalaaSales.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function DalaaSales() {
  const fields = [
    { name: "name", label: "الاسم", type: "text" },
    { name: "day", label: "اليوم", type: "text" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "rent", label: "الإيجار", type: "number" },
    { name: "expenses", label: "المصاريف", type: "number" },
    { name: "sold", label: "المباع", type: "number" },
    { name: "outgoing_name", label: "اسم الخارج", type: "text" },
    { name: "outgoing_amount", label: "مبلغ الخوارج", type: "number" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  // numericFields لتحديد الأعمدة التي نرغب بحساب إجمالياتها
  return <AdvancedSubCRUD branchId="dalaa" dataKey="sales_exhibition" title="مبيعات سنتر دلع الهوانم" fields={fields} numericFields={["rent","expenses","sold","outgoing_amount"]} />;
}
