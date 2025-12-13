// src/services/firestoreStorage.js
import { db } from "../firebase";
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

// قراءة جميع السجلات
export async function readRecords(branchId, dataKey) {
  try {
    console.log("📥 readRecords →", branchId, dataKey);

    const colRef = collection(db, "branches", branchId, dataKey);
    const snap = await getDocs(colRef);

    const items = [];
    snap.forEach((d) => items.push({ id: d.id, ...d.data() }));

    console.log("📤 readRecords returned:", items);
    return items;
  } catch (error) {
    console.error("❌ Firestore read error:", error);
    return [];
  }
}

// إضافة سجل جديد
export async function saveRecord(branchId, dataKey, payload) {
  console.log("🔥 saveRecord fired!", branchId, dataKey, payload);

  try {
    const colRef = collection(db, "branches", branchId, dataKey);

    const docRef = await addDoc(colRef, {
      ...payload,
      dateAdded: serverTimestamp(),
    });

    console.log("✅ Saved with ID:", docRef.id);
    return docRef.id;

  } catch (error) {
    console.error("❌ Firestore save error:", error);
    return null;
  }
}

// تحديث سجل
export async function updateRecord(branchId, dataKey, id, payload) {
  console.log("✏️ updateRecord →", branchId, dataKey, id, payload);

  try {
    const docRef = doc(db, "branches", branchId, dataKey, id);

    await updateDoc(docRef, {
      ...payload,
      updatedAt: serverTimestamp(),
    });

    console.log("✅ Record updated");
    return true;

  } catch (error) {
    console.error("❌ Firestore update error:", error);
    return false;
  }
}

// حذف سجل
export async function deleteRecord(branchId, dataKey, id) {
  console.log("🗑 deleteRecord →", branchId, dataKey, id);

  try {
    const docRef = doc(db, "branches", branchId, dataKey, id);
    await deleteDoc(docRef);

    console.log("✅ Record deleted");
    return true;

  } catch (error) {
    console.error("❌ Firestore delete error:", error);
    return false;
  }
}

// قراءة سجل واحد
export async function getRecord(branchId, dataKey, id) {
  console.log("📌 getRecord →", branchId, dataKey, id);

  try {
    const docRef = doc(db, "branches", branchId, dataKey, id);
    const snap = await getDoc(docRef);

    if (!snap.exists()) {
      console.log("⚠️ Record not found");
      return null;
    }

    const data = { id: snap.id, ...snap.data() };
    console.log("📄 getRecord returned:", data);

    return data;

  } catch (error) {
    console.error("❌ Firestore getRecord error:", error);
    return null;
  }
}
