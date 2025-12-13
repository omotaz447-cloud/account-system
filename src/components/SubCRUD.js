import React, { useEffect, useState } from "react";
import SimpleTable from "./SimpleTable";
import { getBranch, saveTransaction, deleteTransaction } from "../services/storage";

/**
 * props:
 * - branchId (string)  e.g. "belina"
 * - type (string)      "sales" | "purchases" | "expenses"
 * - title (string)     عنوان يعرض فوق الفورم
 */
export default function SubCRUD({ branchId, type = "sales", title = "" }) {
  const [branchData, setBranchData] = useState(getBranch(branchId) || { sales: [], purchases: [], expenses: [], name: "" });
  const [form, setForm] = useState({ amount: "", note: "" });

  useEffect(() => {
    setBranchData(getBranch(branchId) || { sales: [], purchases: [], expenses: [], name: "" });
  }, [branchId]);

  function refresh() {
    setBranchData(getBranch(branchId) || { sales: [], purchases: [], expenses: [], name: "" });
  }

  function handleAdd() {
    const amount = Number(form.amount);
    if (!amount || amount <= 0) return alert("أدخل مبلغ صحيح");

    const ok = saveTransaction(branchId, type, { amount, note: form.note || "" });
    if (!ok) return alert("فشل الحفظ");
    setForm({ amount: "", note: "" });
    refresh();
  }

  function handleDelete(t, id) {
    if (!window.confirm("متأكد من الحذف؟")) return;
    const ok = deleteTransaction(branchId, t, id);
    if (!ok) return alert("فشل الحذف");
    refresh();
  }

  const items = branchData?.[type] || [];

  return (
    <div>
      <div className="header" style={{ marginBottom: 8 }}>
        <div>
          <div className="h-title">{title || `${branchData.name} — ${type}`}</div>
          <div className="h-sub">إدارة بيانات: {type}</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ fontWeight: 700, marginBottom: 8 }}>أضف {type === "sales" ? "مبيعة" : type === "purchases" ? "مشتريات" : "مصروف"}</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <input className="input" placeholder="المبلغ" value={form.amount} onChange={e => setForm({ ...form, amount: e.target.value })} />
          <input className="input" placeholder="البيان" value={form.note} onChange={e => setForm({ ...form, note: e.target.value })} />
          <button className="btn" onClick={handleAdd}>إضافة</button>
        </div>
      </div>

      <SimpleTable title={type === "sales" ? "المبيعات" : type === "purchases" ? "المشتريات" : "المصروفات"} data={items} type={type} onDelete={handleDelete} />
    </div>
  );
}
