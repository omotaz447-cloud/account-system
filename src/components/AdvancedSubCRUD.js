/* eslint-disable no-unused-vars */
// src/components/AdvancedSubCRUD.js

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

import {
  readRecords,
  saveRecord,
  updateRecord,
  deleteRecord
} from "../services/firestoreStorage";

/**
 * AdvancedSubCRUD – حسابات محاسبية مضبوطة
 */
export default function AdvancedSubCRUD({
  branchId,
  dataKey,
  title,
  fields = [],
  numericFields = [],
  enableAttendance = false
}) {
  const hasNameField = fields.some(f =>
    f.name === "name" || /name|اسم/i.test(f.name + "|" + (f.label || ""))
  );

  const effectiveFields = useMemo(() => {
    if (hasNameField) return fields;
    return [{ name: "name", label: "الاسم", type: "text" }, ...fields];
  }, [fields, hasNameField]);

  const [rows, setRows] = useState([]);
  const [form, setForm] = useState({});
  const [editingId, setEditingId] = useState(null);

  // filters
  const [q, setQ] = useState("");
  const [nameQ, setNameQ] = useState("");
  const [dateQ, setDateQ] = useState("");

  async function loadData() {
    const data = await readRecords(branchId, dataKey);
    setRows(data);
  }

  useEffect(() => {
    const init = {};
    effectiveFields.forEach(f => (init[f.name] = ""));
    setForm(init);
    loadData();
  }, [branchId, dataKey, effectiveFields]);

  async function handleAddOrUpdate() {
    const payload = {};

    effectiveFields.forEach(f => {
      let val = form[f.name];
      if (f.type === "number") val = val === "" ? 0 : Number(val);
      payload[f.name] = val;
    });

    if (editingId) {
      await updateRecord(branchId, dataKey, editingId, payload);
      setEditingId(null);
    } else {
      await saveRecord(branchId, dataKey, payload);
    }

    const cleared = {};
    effectiveFields.forEach(f => (cleared[f.name] = ""));
    setForm(cleared);

    loadData();
  }

  function handleEdit(item) {
    setEditingId(item.id);
    const newForm = {};
    effectiveFields.forEach(f => {
      newForm[f.name] = item[f.name] ?? "";
    });
    setForm(newForm);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleDelete(id) {
    if (!window.confirm("هل أنت متأكد من الحذف؟")) return;
    await deleteRecord(branchId, dataKey, id);
    loadData();
  }

  /* =========================
     🔵 إضافة الحضور / الغياب
     ========================= */
  async function markAttendance(id, status) {
    await updateRecord(branchId, dataKey, id, {
      attendance: status
    });
    loadData();
  }

  const filteredRows = rows.filter(r => {
    if (q && !JSON.stringify(r).toLowerCase().includes(q.toLowerCase()))
      return false;

    if (nameQ) {
      const v = String(r.name || "").toLowerCase();
      if (!v.includes(nameQ.toLowerCase())) return false;
    }

    if (dateQ) {
      let recordDate = "";
      if (typeof r.date === "string") recordDate = r.date;
      else if (r.createdAt?.toDate)
        recordDate = r.createdAt.toDate().toISOString().slice(0, 10);
      if (!recordDate || recordDate !== dateQ) return false;
    }

    return true;
  });

  /* =====================================================
     🧮 منطق محاسبي مضبوط (كما هو)
  ===================================================== */
  const getRowTotal = row => {
    const getVal = keywords => {
      const field = effectiveFields.find(f =>
        keywords.some(k =>
          (f.name + " " + (f.label || "")).toLowerCase().includes(k)
        )
      );
      return field ? Number(row[field.name] || 0) : 0;
    };

    const afterInventory = getVal(["بعد", "after"]);
    const cashHome = getVal(["نقدي", "cash"]);
    const withdraw = getVal(["سحب", "withdraw"]);
    const insurance = getVal(["تأمين", "insurance"]);

    return afterInventory + cashHome - withdraw - insurance;
  };

  const tableTotal = useMemo(() => {
    return filteredRows.reduce((sum, r) => sum + getRowTotal(r), 0);
  }, [filteredRows]);

  /* =========================
     ✅ ADDED: إجمالي الحضور / الغياب
     ========================= */
  const attendanceTotals = useMemo(() => {
    let present = 0;
    let absent = 0;

    filteredRows.forEach(r => {
      if (r.attendance === "present") present++;
      if (r.attendance === "absent") absent++;
    });

    return { present, absent };
  }, [filteredRows]);

  return (
    <div style={{ width: "100%" }}>
      <h3>{title}</h3>

      {/* Filters */}
      <div style={{ marginBottom: 12, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input className="input" placeholder="بحث عام..." value={q} onChange={e => setQ(e.target.value)} />
        <input className="input" placeholder="بحث بالاسم..." value={nameQ} onChange={e => setNameQ(e.target.value)} />
        <input className="input" type="date" value={dateQ} onChange={e => setDateQ(e.target.value)} />
        <button className="btn ghost" onClick={loadData}>تحديث</button>
      </div>

      {/* Form */}
      <div className="card" style={{ marginBottom: 12 }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {effectiveFields.map(f => (
            <input
              key={f.name}
              className="input"
              placeholder={f.label}
              type={f.type}
              value={form[f.name]}
              onChange={e => setForm({ ...form, [f.name]: e.target.value })}
            />
          ))}
          <button className="btn" onClick={handleAddOrUpdate}>
            {editingId ? "حفظ" : "إضافة"}
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="card">
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {effectiveFields.map(f => (
                <th key={f.name} style={{ padding: 8, textAlign: "right" }}>
                  {f.label}
                </th>
              ))}
              <th style={{ textAlign: "right" }}>إجمالي السطر</th>

              {enableAttendance && (
                <th style={{ textAlign: "center" }}>الحضور</th>
              )}

              <th style={{ textAlign: "center" }}>إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.map(r => (
              <tr key={r.id}>
                {effectiveFields.map(f => (
                  <td key={f.name} style={{ padding: 8 }}>
                    {r[f.name] ?? "-"}
                  </td>
                ))}

                <td style={{ padding: 8, fontWeight: "bold" }}>
                  {getRowTotal(r)}
                </td>

                {enableAttendance && (
                  <td style={{ textAlign: "center" }}>
                    <button
                      className="btn ghost"
                      style={{ marginInlineEnd: 6 }}
                      onClick={() => markAttendance(r.id, "present")}
                    >
                      حضور
                    </button>
                    <button
                      className="btn"
                      style={{ background: "#dc2626" }}
                      onClick={() => markAttendance(r.id, "absent")}
                    >
                      غياب
                    </button>
                  </td>
                )}

                <td style={{ textAlign: "center" }}>
                  <button className="btn ghost" onClick={() => handleEdit(r)}>
                    تعديل
                  </button>
                  <button
                    className="btn"
                    style={{ background: "#dc2626" }}
                    onClick={() => handleDelete(r.id)}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div style={{ marginTop: 14, padding: 12, fontWeight: "bold", textAlign: "left" }}>
          إجمالي الجدول: {tableTotal}
        </div>

        {/* ✅ ADDED: إجمالي الحضور / الغياب */}
        {enableAttendance && (
          <div style={{ padding: 12, fontWeight: "bold" }}>
            إجمالي الحضور: {attendanceTotals.present} | إجمالي الغياب: {attendanceTotals.absent}
          </div>
        )}
      </div>
    </div>
  );
}

AdvancedSubCRUD.propTypes = {
  branchId: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  title: PropTypes.string,
  fields: PropTypes.array,
  numericFields: PropTypes.array,
  enableAttendance: PropTypes.bool
};
