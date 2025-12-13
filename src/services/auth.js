// src/services/auth.js
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

export async function loginWithEmail(email, password) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return { ok: true, user: res.user };
  } catch (error) {
    return { ok: false, error };
  }
}

export async function logout() {
  try {
    await signOut(auth);
    return { ok: true };
  } catch (error) {
    return { ok: false, error };
  }
}

export function getLoggedUser() {
  try {
    return auth.currentUser || null;
  } catch (e) {
    return null;
  }
}
