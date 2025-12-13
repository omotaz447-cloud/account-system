// src/pages/dalaa/DalaaPrimary.js
import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function DalaaPrimary() {
  const fields = [
    { name: "fixed_before", label: "ثابت قبل الجرد", type: "number" },
    { name: "fixed_after", label: "ثابت بعد الجرد", type: "number" },
    { name: "cash_house", label: "نقدي في البيت", type: "number" },
    { name: "withdraw", label: "سحب", type: "number" },
    { name: "insurance", label: "تأمين", type: "number" },
    { name: "total", label: "الإجمالي", type: "number" },
    { name: "date", label: "التاريخ", type: "date" },
    { name: "notes", label: "ملاحظات", type: "text" },
  ];
  return <AdvancedSubCRUD branchId="dalaa" dataKey="primary_dalaa" title="حسابات رئيسيه — سنتر دلع الهوانم" fields={fields} numericFields={["withdraw","insurance","total"]} />;
}
