// src/services/storage.js
// Local storage based storage for branches & records.
// API:
//   initSampleData()
//   listBranches()
//   getBranch(branchId)
//   saveRecord(branchId, key, payload) -> creates id, dateAdded
//   updateRecord(branchId, key, id, payload)
//   deleteRecord(branchId, key, id)
//   saveTransaction(branchId, type, { amount, note })  // used by SubCRUD
//   deleteTransaction(branchId, type, id)
// Data structure in localStorage under 'account_system_branches':
//   { branches: [ { id, name, cash, sales: [], purchases: [], expenses: [], workers: [], ... } ] }

const STORAGE_KEY = "account_system_branches_v1";

function uid() {
  return Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 9);
}

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { branches: [] };
    return JSON.parse(raw);
  } catch (e) {
    return { branches: [] };
  }
}

function save(store) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}

export function initSampleData() {
  const existing = load();
  if (existing.branches && existing.branches.length > 0) return;

  const sample = {
    branches: [
      {
        id: "belina",
        name: "البلينا",
        cash: 0,
        sales: [],
        purchases: [],
        expenses: [],
        workers: [],
        traders: [],
        baika: []
      },
      {
        id: "garga",
        name: "جرجا",
        cash: 0,
        sales_exhibition: [],
        traders: [],
        workers: [],
        baika: []
      },
      {
        id: "dalaa",
        name: "دلع الهوانم",
        cash: 0,
        sales: [],
        purchases: [],
        expenses: [],
        workers: [],
        traders: []
      },
      {
        id: "seema",
        name: "سنتر سيما",
        cash: 0,
        sales_exhibition: [],
        workers: [],
        traders: [],
        main: []
      },
      {
        id: "ghaza",
        name: "سنتر غزه",
        cash: 0,
        sales_exhibition: [],
        workers: [],
        traders: [],
        main: []
      }
    ]
  };
  save(sample);
}

export function listBranches() {
  const store = load();
  return (store.branches || []).map(b => ({ id: b.id, name: b.name }));
}

export function getBranch(branchId) {
  const store = load();
  const b = (store.branches || []).find(x => x.id === branchId);
  return b ? JSON.parse(JSON.stringify(b)) : null;
}

function ensureBranchExists(branchId) {
  const store = load();
  if (!(store.branches || []).some(b => b.id === branchId)) {
    store.branches = store.branches || [];
    store.branches.push({ id: branchId, name: branchId, cash: 0 });
    save(store);
  }
}

export function saveRecord(branchId, key, payload) {
  ensureBranchExists(branchId);
  const store = load();
  const branch = store.branches.find(b => b.id === branchId);
  branch[key] = branch[key] || [];
  const item = { ...payload, id: uid(), dateAdded: Date.now() };
  branch[key].push(item);
  save(store);
  return item.id;
}

export function updateRecord(branchId, key, id, payload) {
  const store = load();
  const branch = store.branches.find(b => b.id === branchId);
  if (!branch || !Array.isArray(branch[key])) return false;
  const idx = branch[key].findIndex(x => x.id === id);
  if (idx === -1) return false;
  branch[key][idx] = { ...branch[key][idx], ...payload };
  save(store);
  return true;
}

export function deleteRecord(branchId, key, id) {
  const store = load();
  const branch = store.branches.find(b => b.id === branchId);
  if (!branch || !Array.isArray(branch[key])) return false;
  branch[key] = branch[key].filter(x => x.id !== id);
  save(store);
  return true;
}

// transactions API used by SubCRUD
export function saveTransaction(branchId, type, { amount, note }) {
  ensureBranchExists(branchId);
  const store = load();
  const branch = store.branches.find(b => b.id === branchId);
  branch[type] = branch[type] || [];
  const t = { id: uid(), amount: Number(amount), note: note || "", date: Date.now() };
  branch[type].push(t);
  save(store);
  return t.id;
}
export function deleteTransaction(branchId, type, id) {
  return deleteRecord(branchId, type, id);
}
