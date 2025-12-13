import React from "react";
import AdvancedSubCRUD from "../../components/AdvancedSubCRUD";

export default function GhazaMain() {
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
  return (
    <AdvancedSubCRUD
      branchId="ghaza"
      dataKey="main_ghaza"
      title="حسابات سنتر غزه"
      fields={fields}
      numericFields={["withdraw", "insurance", "total"]}
    />
  );
}
