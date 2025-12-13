// src/services/firestoreService.js
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from "firebase/firestore";

import { db } from "../firebase";

// قراءة كل المستندات
export async function readRecords(branchId, pageKey) {
  const col = collection(db, "branches", branchId, pageKey);
  const snap = await getDocs(col);

  const data = [];
  snap.forEach(d => data.push({ id: d.id, ...d.data() }));

  return data;
}

// حفظ جديد
export async function saveRecord(branchId, pageKey, payload) {
  const col = collection(db, "branches", branchId, pageKey);
  const ref = await addDoc(col, {
    ...payload,
    dateAdded: serverTimestamp()
  });

  return ref.id;
}

// تعديل
export async function updateRecord(branchId, pageKey, id, payload) {
  const dRef = doc(db, "branches", branchId, pageKey, id);
  await updateDoc(dRef, {
    ...payload,
    updatedAt: serverTimestamp()
  });
  return true;
}

// حذف
export async function deleteRecord(branchId, pageKey, id) {
  const dRef = doc(db, "branches", branchId, pageKey, id);
  await deleteDoc(dRef);
  return true;
}

// جلب مستند واحد
export async function getRecord(branchId, pageKey, id) {
  const dRef = doc(db, "branches", branchId, pageKey, id);
  const snap = await getDoc(dRef);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}
