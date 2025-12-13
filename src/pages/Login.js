// src/pages/Login.js
import React, { useState, useEffect } from "react";
import { loginWithEmail, getLoggedUser } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  // ====== Auto redirect if logged in ======
  useEffect(() => {
    try {
      const u = getLoggedUser();
      if (u) {
        navigate("/branch/belina", { replace: true });
      }
    } catch (e) {
      console.error("Auth error:", e);
    }
  }, [navigate]);

  // ====== Handle Submit ======
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    const res = await loginWithEmail(username.trim(), password);

    setLoading(false);

    if (!res.ok) {
      console.error("Login error:", res.error);
      setErr("اسم المستخدم أو كلمة المرور غير صحيحة");
      return;
    }

    navigate("/branch/belina", { replace: true });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg,#0b1220,#081025)",
        padding: 20,
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: 420,
          maxWidth: "calc(100% - 40px)",
          padding: 28,
          borderRadius: 14,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
          boxShadow: "0 12px 40px rgba(2,6,23,0.6)",
          backdropFilter: "blur(8px) saturate(120%)",
          border: "1px solid rgba(255,255,255,0.06)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            margin: 0,
            marginBottom: 12,
            fontSize: 20,
            color: "#fff",
            fontWeight: 800,
          }}
        >
          تسجيل الدخول
        </h2>

        <div style={{ marginBottom: 10, color: "#cbd5e1" }}>
          ادخل بياناتك للدخول إلى النظام
        </div>

        {/* Email */}
        <label
          style={{
            display: "block",
            marginTop: 10,
            marginBottom: 6,
            color: "#dfe7ff",
          }}
        >
          البريد الإلكتروني
        </label>

        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="email"
          autoComplete="username"
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
            color: "#fff",
            outline: "none",
          }}
        />

        {/* Password */}
        <label
          style={{
            display: "block",
            marginTop: 12,
            marginBottom: 6,
            color: "#dfe7ff",
          }}
        >
          كلمة المرور
        </label>

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          autoComplete="current-password"
          style={{
            width: "100%",
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.02)",
            color: "#fff",
            outline: "none",
          }}
        />

        {/* Error */}
        {err && (
          <div style={{ marginTop: 10, color: "#ffb3b3", fontWeight: 600 }}>
            {err}
          </div>
        )}

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 18,
          }}
        >
          <button
            type="submit"
            disabled={loading}
            style={{
              padding: "10px 18px",
              borderRadius: 10,
              border: "none",
              cursor: "pointer",
              background: "linear-gradient(90deg,#4f46e5,#06b6d4)",
              color: "#fff",
              fontWeight: 700,
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "جاري..." : "دخول"}
          </button>

          <div
            style={{
              color: "#9fb3ff",
              alignSelf: "center",
              fontSize: 13,
            }}
          >
            {/* مكان رابط نسيان كلمة المرور */}
          </div>
        </div>
      </form>
    </div>
  );
}
