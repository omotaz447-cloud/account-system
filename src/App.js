// src/App.js
import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate, useLocation, useParams } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

import BranchPage from "./pages/BranchPage";
import LoginPage from "./pages/Login";

import { initSampleData, listBranches } from "./services/storage";
import { logout, getLoggedUser } from "./services/auth";

/* ----------- BELINA ----------- */
import BelinaWorkers from "./pages/belina/BelinaWorkers";
import BelinaExhibition from "./pages/belina/BelinaExhibition";
import BelinaTraders from "./pages/belina/BelinaTraders";
import BelinaSales from "./pages/belina/BelinaSales";
import BelinaBaika from "./pages/belina/BelinaBaika";
import BelinaMahmoud from "./pages/belina/BelinaMahmoud";
import BelinaWahid from "./pages/belina/BelinaWahid";

/* ----------- GARGA ----------- */
import GargaTradersMall from "./pages/garga/GargaTradersMall";
import GargaWorkersMall from "./pages/garga/GargaWorkersMall";
import GargaExhibitionMall from "./pages/garga/GargaExhibitionMall";
import GargaSalesMall from "./pages/garga/GargaSalesMall";
import GargaBaika from "./pages/garga/GargaBaika";
import GargaMahmoud from "./pages/garga/GargaMahmoud";
import GargaWahid from "./pages/garga/GargaWahid";

/* ----------- DALAA ----------- */
import DalaaWorkers from "./pages/dalaa/DalaaWorkers";
import DalaaTraders from "./pages/dalaa/DalaaTraders";
import DalaaCenter from "./pages/dalaa/DalaaCenter";
import DalaaSales from "./pages/dalaa/DalaaSales";
import DalaaPrimary from "./pages/dalaa/DalaaPrimary";
import DalaaMahmoud from "./pages/dalaa/DalaaMahmoud";
import DalaaWahid from "./pages/dalaa/DalaaWahid";
import DalaaBasem from "./pages/dalaa/DalaaBasem";
import DalaaEmad from "./pages/dalaa/DalaaEmad";

/* ----------- SEEMA ----------- */
import SeemaCenter from "./pages/seema/SeemaCenter";
import SeemaWorkers from "./pages/seema/SeemaWorkers";
import SeemaSales from "./pages/seema/SeemaSales";
import SeemaTraders from "./pages/seema/SeemaTraders";
import SeemaMain from "./pages/seema/SeemaMain";
import SeemaMilad from "./pages/seema/SeemaMilad";
import SeemaWahid from "./pages/seema/SeemaWahid";
import SeemaBasem from "./pages/seema/SeemaBasem";
import SeemaEmad from "./pages/seema/SeemaEmad";
import SeemaMena from "./pages/seema/SeemaMena";

/* ----------- GHAZA ----------- */
import GhazaSales from "./pages/ghaza/GhazaSales";
import GhazaCenter from "./pages/ghaza/GhazaCenter";
import GhazaTraders from "./pages/ghaza/GhazaTraders";
import GhazaWorkers from "./pages/ghaza/GhazaWorkers";
import GhazaMain from "./pages/ghaza/GhazaMain";
import GhazaMahmoud from "./pages/ghaza/GhazaMahmoud";
import GhazaWahid from "./pages/ghaza/GhazaWahid";
import GhazaBasemWahid from "./pages/ghaza/GhazaBasemWahid";
import GhazaMenaWahid from "./pages/ghaza/GhazaMenaWahid";
import GhazaBaika from "./pages/ghaza/GhazaBaika";

/* ---------------- Init sample data ---------------- */
try {
  initSampleData();
} catch (e) {
  console.warn("initSampleData error ignored");
}

/* ============================================================
   DYNAMIC ROUTERS (center + sales)
   ============================================================ */

function CenterRouter() {
  const { branchId } = useParams();

  const centerMap = {
    belina: BelinaExhibition,
    garga: GargaExhibitionMall,
    dalaa: DalaaCenter,
    seema: SeemaCenter,
    ghaza: GhazaCenter,
  };

  const Comp = centerMap[branchId];
  if (!Comp) return <Navigate to={`/branch/${branchId}`} replace />;
  return <Comp />;
}

function SalesRouter() {
  const { branchId } = useParams();

  const salesMap = {
    belina: BelinaSales,
    garga: GargaSalesMall,
    dalaa: DalaaSales,
    seema: SeemaSales,
    ghaza: GhazaSales,
  };

  const Comp = salesMap[branchId];
  if (!Comp) return <Navigate to={`/branch/${branchId}`} replace />;
  return <Comp />;
}

/* ============================================================
   MAIN APP
   ============================================================ */

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const branches = listBranches() || [];
  const user = getLoggedUser();

  // Protect pages from accessing without login
  useEffect(() => {
    if (!user && location.pathname !== "/login") {
      navigate("/login", { replace: true });
    }
  }, [user, location.pathname, navigate]);

  async function handleLogout() {
    await logout();
    navigate("/login", { replace: true });
  }

  const showTopbar = location.pathname !== "/login";

  return (
    <div className="app-root" dir="rtl" style={{ height: "100vh", display: "flex", flexDirection: "column" }}>

      {/* Show topbar only if not on login page */}
      {showTopbar && <Topbar onLogout={handleLogout} />}

      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>

        {/* Sidebar hidden in login page */}
        {showTopbar && <Sidebar branches={branches} />}

        <main style={{ flex: 1, padding: 20, overflow: "auto", minWidth: 0 }}>
          <Routes>

            {/* LOGIN PAGE */}
            <Route path="/login" element={<LoginPage />} />

            {/* DEFAULT ROOT */}
            <Route path="/" element={<Navigate to="/branch/belina" replace />} />

            {/* ROOT OF EACH BRANCH */}
            {branches.map((b) => (
              <Route key={b.id} path={`/branch/${b.id}`} element={<BranchPage branch={b} />} />
            ))}

            {/* DYNAMIC ROUTES */}
            <Route path="/branch/:branchId/center" element={<CenterRouter />} />
            <Route path="/branch/:branchId/sales" element={<SalesRouter />} />

            {/* -------- BELINA -------- */}
            <Route path="/branch/belina/workers" element={<BelinaWorkers />} />
            <Route path="/branch/belina/republic-exhibition" element={<BelinaExhibition />} />
            <Route path="/branch/belina/traders" element={<BelinaTraders />} />
            <Route path="/branch/belina/sales-exhibition" element={<BelinaSales />} />
            <Route path="/branch/belina/baika" element={<BelinaBaika />} />
            <Route path="/branch/belina/mahmoud" element={<BelinaMahmoud />} />
            <Route path="/branch/belina/wahid" element={<BelinaWahid />} />

            {/* -------- GARGA -------- */}
            <Route path="/branch/garga/workers-mall" element={<GargaWorkersMall />} />
            <Route path="/branch/garga/traders-mall" element={<GargaTradersMall />} />
            <Route path="/branch/garga/exhibition-mall" element={<GargaExhibitionMall />} />
            <Route path="/branch/garga/sales-mall" element={<GargaSalesMall />} />
            <Route path="/branch/garga/baika" element={<GargaBaika />} />
            <Route path="/branch/garga/mahmoud" element={<GargaMahmoud />} />
            <Route path="/branch/garga/wahid" element={<GargaWahid />} />

            {/* Fix aliases */}
            <Route path="/branch/garga/workers" element={<GargaWorkersMall />} />
            <Route path="/branch/garga/traders" element={<GargaTradersMall />} />

            {/* -------- DALAA -------- */}
            <Route path="/branch/dalaa/workers" element={<DalaaWorkers />} />
            <Route path="/branch/dalaa/traders" element={<DalaaTraders />} />
            <Route path="/branch/dalaa/center" element={<DalaaCenter />} />
            <Route path="/branch/dalaa/sales" element={<DalaaSales />} />
            <Route path="/branch/dalaa/primary" element={<DalaaPrimary />} />
            <Route path="/branch/dalaa/mahmoud" element={<DalaaMahmoud />} />
            <Route path="/branch/dalaa/wahid" element={<DalaaWahid />} />
            <Route path="/branch/dalaa/basem" element={<DalaaBasem />} />
            <Route path="/branch/dalaa/emad" element={<DalaaEmad />} />

            {/* -------- SEEMA -------- */}
            <Route path="/branch/seema/center" element={<SeemaCenter />} />
            <Route path="/branch/seema/workers" element={<SeemaWorkers />} />
            <Route path="/branch/seema/sales" element={<SeemaSales />} />
            <Route path="/branch/seema/traders" element={<SeemaTraders />} />
            <Route path="/branch/seema/main" element={<SeemaMain />} />
            <Route path="/branch/seema/milad" element={<SeemaMilad />} />
            <Route path="/branch/seema/wahid" element={<SeemaWahid />} />
            <Route path="/branch/seema/basem" element={<SeemaBasem />} />
            <Route path="/branch/seema/emad" element={<SeemaEmad />} />
            <Route path="/branch/seema/mena" element={<SeemaMena />} />

            {/* -------- GHAZA -------- */}
            <Route path="/branch/ghaza/workers" element={<GhazaWorkers />} />
            <Route path="/branch/ghaza/center" element={<GhazaCenter />} />
            <Route path="/branch/ghaza/traders" element={<GhazaTraders />} />
            <Route path="/branch/ghaza/sales" element={<GhazaSales />} />
            <Route path="/branch/ghaza/main" element={<GhazaMain />} />
            <Route path="/branch/ghaza/mahmoud" element={<GhazaMahmoud />} />
            <Route path="/branch/ghaza/wahid" element={<GhazaWahid />} />
            <Route path="/branch/ghaza/basem_wahid" element={<GhazaBasemWahid />} />
            <Route path="/branch/ghaza/mena_wahid" element={<GhazaMenaWahid />} />
            <Route path="/branch/ghaza/baika" element={<GhazaBaika />} />

            {/* fallback 404 */}
            <Route path="*" element={<div style={{ color: "#fff" }}>الصفحة غير موجودة</div>} />

          </Routes>
        </main>
      </div>
    </div>
  );
}
