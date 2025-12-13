// src/services/auth.js

// USERS WITH ROLES
const USERS = [
  {
    email: "admin@system.com",
    password: "123456",
    role: "admin",
    allowedPage: "all"
  },
  {
    email: "belina@system.com",
    password: "123456",
    role: "belina",
    allowedPage: "belina"
  },
  {
    email: "garga@system.com",
    password: "123456",
    role: "garga",
    allowedPage: "garga"
  },
  {
    email: "dalaa@system.com",
    password: "123456",
    role: "dalaa",
    allowedPage: "dalaa"
  },
  {
    email: "seema@system.com",
    password: "123456",
    role: "seema",
    allowedPage: "seema"
  },
  {
    email: "ghaza@system.com",
    password: "123456",
    role: "ghaza",
    allowedPage: "ghaza"
  }
];

// Save user to localStorage
function saveUser(user) {
  localStorage.setItem("logged_user", JSON.stringify(user));
}

// Get logged user
export function getLoggedUser() {
  const u = localStorage.getItem("logged_user");
  return u ? JSON.parse(u) : null;
}

// Logout
export function logout() {
  localStorage.removeItem("logged_user");
}

// Login Function
export async function loginWithEmail(email, password) {
  const user = USERS.find(
    u => u.email === email.trim() && u.password === password
  );

  if (!user) return { ok: false, error: "wrong_credentials" };

  saveUser(user);

  return { ok: true, user };
}
