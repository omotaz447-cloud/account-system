/* eslint-disable no-unused-vars */
// src/components/AdvancedSubCRUD.js

import React, { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

// Firestore CRUD
import {
  readRecords,
  saveRecord,
  updateRecord,
  deleteRecord
} from "../services/firestoreStorage";

/**
 * AdvancedSubCRUD – نسخة تعمل بالكامل مع Cloud Firestore
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

  // Load data from Firestore
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

      if (f.type === "number") {
        val = val === "" ? 0 : Number(val);
      }

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

  const filteredRows = rows.filter(r => {
    if (q && !JSON.stringify(r).toLowerCase().includes(q.toLowerCase()))
      return false;

    if (nameQ) {
      const v = String(r.name || "").toLowerCase();
      if (!v.includes(nameQ.toLowerCase())) return false;
    }

    return true;
  });

  return (
    <div style={{ width: "100%" }}>
      <h3>{title}</h3>

      {/* Filters */}
      <div style={{ marginBottom: 12, display: "flex", gap: 8 }}>
        <input
          className="input"
          placeholder="بحث عام..."
          value={q}
          onChange={e => setQ(e.target.value)}
          style={{ minWidth: 180 }}
        />

        <input
          className="input"
          placeholder="بحث بالاسم..."
          value={nameQ}
          onChange={e => setNameQ(e.target.value)}
          style={{ minWidth: 180 }}
        />

        <button className="btn ghost" onClick={() => loadData()}>
          تحديث
        </button>
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

          {editingId && (
            <button
              className="btn ghost"
              onClick={() => {
                setEditingId(null);
                const cleared = {};
                effectiveFields.forEach(f => (cleared[f.name] = ""));
                setForm(cleared);
              }}
            >
              إلغاء
            </button>
          )}
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
              <th style={{ textAlign: "center" }}>إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {filteredRows.map(r => (
              <tr key={r.id}>
                {effectiveFields.map(f => (
                  <td key={f.name} style={{ padding: 8 }}>
                    {r[f.name] || "-"}
                  </td>
                ))}

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

            {filteredRows.length === 0 && (
              <tr>
                <td
                  colSpan={effectiveFields.length + 1}
                  style={{ textAlign: "center" }}
                >
                  لا توجد بيانات
                </td>
              </tr>
            )}
          </tbody>
        </table>
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
