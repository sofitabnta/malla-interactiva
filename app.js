// ======================
// 1) DATA: Malla + prerrequisitos
// ======================
// id: string único (no repetir)
// name: nombre visible
// semester: 1..10
// prereqs: lista de ids que deben estar aprobados antes

const COURSES = [
  // 1° semestre
  { id: "romano1", name: "Derecho Romano I", semester: 1, prereqs: [] },
  { id: "fufi", name: "Fund. Filosóficos del Derecho", semester: 1, prereqs: [] },
  { id: "historia_der", name: "Historia del Derecho", semester: 1, prereqs: [] },
  { id: "teoria_fuentes", name: "Teoría y Fuentes del Derecho", semester: 1, prereqs: [] },
  { id: "intro_econ", name: "Introducción a la Economía", semester: 1, prereqs: [] },
  { id: "fg1a", name: "Formación General", semester: 1, prereqs: [] },
  { id: "fg1b", name: "Formación General", semester: 1, prereqs: [] },

  // 2° semestre
  { id: "romano2", name: "Derecho Romano II", semester: 2, prereqs: ["romano1"] },
  { id: "derecho_natural", name: "Derecho Natural", semester: 2, prereqs: ["fufi"] },
  { id: "hist_inst", name: "Historia de las Instituciones Jurídicas, Políticas y Sociales", semester: 2, prereqs: ["historia_der"] },
  { id: "derecho_politico", name: "Derecho Político", semester: 2, prereqs: ["teoria_fuentes"] },
  { id: "econ1", name: "Derecho Económico I", semester: 2, prereqs: ["intro_econ"] },
  { id: "teologico", name: "Teológico", semester: 2, prereqs: [] },
  { id: "taller_metodo", name: "Taller de Metodología de la Investigación", semester: 2, prereqs: [] },

  // 3° semestre
  { id: "acto_ley", name: "Teoría del Acto Jurídico y Teoría de la Ley", semester: 3, prereqs: ["romano2"] },
  { id: "inst_proc1", name: "Instituciones Procesales I", semester: 3, prereqs: ["teoria_fuentes"] },
  { id: "estado_der_ch", name: "Instituciones del Estado de Derecho Chileno", semester: 3, prereqs: ["derecho_politico"] },
  { id: "int_publico", name: "Derecho Internacional Público", semester: 3, prereqs: [] },
  { id: "econ2", name: "Derecho Económico II", semester: 3, prereqs: ["econ1"] },
  { id: "fg3", name: "Formación General", semester: 3, prereqs: [] },

  // 4° semestre
  { id: "personas_bienes", name: "Personas y Bienes", semester: 4, prereqs: ["acto_ley"] },
  { id: "inst_proc2", name: "Instituciones Procesales II", semester: 4, prereqs: ["inst_proc1"] },
  { id: "ddff_ddhh", name: "Derechos Fundamentales y Derechos Humanos", semester: 4, prereqs: ["estado_der_ch"] },
  { id: "trabajo", name: "Derecho del Trabajo", semester: 4, prereqs: [] },
  { id: "comerciante_bases", name: "El Comerciante y Bases Cont. Mercantil", semester: 4, prereqs: [] },
  { id: "fg4", name: "Formación General", semester: 4, prereqs: [] },

  // 5° semestre
  { id: "obligaciones", name: "Obligaciones", semester: 5, prereqs: ["personas_bienes"] },
  { id: "admin1", name: "Derecho Administrativo I", semester: 5, prereqs: ["estado_der_ch"] },
  { id: "penal_pg1", name: "Derecho Penal Parte General I", semester: 5, prereqs: ["teoria_fuentes"] },
  { id: "sociedades", name: "Derecho de Sociedades", semester: 5, prereqs: ["comerciante_bases"] },

  // 6° semestre
  { id: "fuentes1", name: "Fuentes de las Obligaciones I", semester: 6, prereqs: ["obligaciones"] },
  { id: "admin2", name: "Derecho Administrativo II", semester: 6, prereqs: ["admin1"] },
  { id: "penal_pg2", name: "Derecho Penal Parte General II", semester: 6, prereqs: ["penal_pg1"] },
  { id: "fin_empresa", name: "Financiamiento de la Empresa", semester: 6, prereqs: ["sociedades"] },
  { id: "proc_civ1", name: "Procedimientos Civiles I", semester: 6, prereqs: ["inst_proc2"] },
  { id: "fg6", name: "Formación General", semester: 6, prereqs: [] },

  // 7° semestre
  { id: "fuentes2", name: "Fuentes de las Obligaciones II", semester: 7, prereqs: ["fuentes1"] },
  { id: "penal_especial", name: "Derecho Penal Parte Especial", semester: 7, prereqs: ["penal_pg2"] },
  { id: "contratos_merc", name: "Contratos Mercantiles y Concursos", semester: 7, prereqs: ["fuentes2", "fin_empresa"] },
  { id: "proc_civ2", name: "Procedimientos Civiles II", semester: 7, prereqs: ["proc_civ1"] },
  { id: "proc_penales", name: "Procedimientos Penales", semester: 7, prereqs: ["penal_especial"] },
  { id: "fg7", name: "Formación General", semester: 7, prereqs: [] },

  // 8° semestre
  { id: "familia", name: "Derecho de Familia", semester: 8, prereqs: ["fuentes2"] },
  { id: "canonico", name: "Derecho Canónico", semester: 8, prereqs: [] },
  { id: "tributario1", name: "Derecho Tributario I", semester: 8, prereqs: ["econ2"] },
  { id: "clinica1", name: "Clínica Jurídica I", semester: 8, prereqs: ["proc_civ2"] },
  { id: "opt8", name: "Optativo de profundización", semester: 8, prereqs: [] },

  // 9° semestre
  { id: "sucesorio", name: "Derecho Sucesorio", semester: 9, prereqs: ["familia"] },
  { id: "etica", name: "Ética Profesional", semester: 9, prereqs: ["clinica1"] },
  { id: "int_privado", name: "Derecho Internacional Privado", semester: 9, prereqs: ["int_publico"] },
  { id: "tributario2", name: "Derecho Tributario II", semester: 9, prereqs: ["tributario1"] },
  { id: "clinica2", name: "Clínica Jurídica II", semester: 9, prereqs: ["clinica1"] },
  { id: "opt9a", name: "Optativo de profundización", semester: 9, prereqs: [] },
  { id: "opt9b", name: "Optativo de profundización", semester: 9, prereqs: [] },

  // 10° semestre
  { id: "opt10a", name: "Optativo de profundización", semester: 10, prereqs: [] },
  { id: "opt10b", name: "Optativo de profundización", semester: 10, prereqs: [] },
  { id: "opt10c", name: "Optativo de profundización", semester: 10, prereqs: [] },
  { id: "opt10d", name: "Optativo de profundización", semester: 10, prereqs: [] },
  { id: "seminario", name: "Seminario de Investigación", semester: 10, prereqs: ["taller_metodo"] },

  // (Opcional) hitos del plan (no los bloqueo por defecto)
  { id: "ex_com_escrita", name: "Examen de Comunicación Escrita", semester: 10, prereqs: [] },
  { id: "test_ingles", name: "Test de Inglés", semester: 10, prereqs: [] },
  { id: "integridad_uc", name: "Integridad Académica en la UC", semester: 10, prereqs: [] },
  { id: "examen_grado", name: "EXAMEN DE GRADO", semester: 10, prereqs: [] },
  { id: "licenciatura", name: "LICENCIATURA EN DERECHO", semester: 10, prereqs: ["examen_grado"] },
];

// IMPORTANTE:
// Los prerrequisitos exactos dependen de las flechas del diagrama.
// Si quieres, dime “ajusta los prerrequisitos exactamente según el PDF” y los dejamos 1:1.
// (Aquí ya viene una versión razonable para que funcione el bloqueo.)

// ======================
// 2) Estado persistente (localStorage)
// ======================
const LS_KEY = "malla_derecho_uc_v1";

function loadState() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(LS_KEY, JSON.stringify(state));
}

let approved = loadState(); // { [courseId]: true }

// ======================
// 3) Lógica de bloqueo
// ======================
const byId = new Map(COURSES.map(c => [c.id, c]));

function isApproved(id) {
  return !!approved[id];
}

function prereqsMet(course) {
  return (course.prereqs || []).every(isApproved);
}

function getStatus(course) {
  if (isApproved(course.id)) return "approved";
  if (!prereqsMet(course)) return "locked";
  return "pending";
}

// ======================
// 4) Render
// ======================
const grid = document.getElementById("grid");

function render() {
  grid.innerHTML = "";

  for (let sem = 1; sem <= 10; sem++) {
    const semCourses = COURSES.filter(c => c.semester === sem);

    const approvedCount = semCourses.filter(c => isApproved(c.id)).length;

    const semEl = document.createElement("section");
    semEl.className = "semester";

    const head = document.createElement("div");
    head.className = "semTitle";
    head.innerHTML = `
      <h2>${sem}° semestre</h2>
      <div class="badge">${approvedCount}/${semCourses.length} aprobados</div>
    `;

    const list = document.createElement("div");
    list.className = "courseList";

    semCourses.forEach(course => {
      const status = getStatus(course);
      const el = document.createElement("div");
      el.className = `course state-${status}`;

      const pillText =
        status === "approved" ? "Aprobado" :
        status === "locked" ? "Bloqueado" :
        "Pendiente";

      const prereqText =
        (course.prereqs && course.prereqs.length)
          ? "Prerrequisitos: " + course.prereqs.map(id => byId.get(id)?.name ?? id).join(", ")
          : "Sin prerrequisitos";

      el.innerHTML = `
        <div class="courseName">
          <span>${course.name}</span>
          <span class="pill">${pillText}</span>
        </div>
        <div class="meta">${prereqText}</div>
      `;

      el.addEventListener("click", () => onCourseClick(course));
      list.appendChild(el);
    });

    semEl.appendChild(head);
    semEl.appendChild(list);
    grid.appendChild(semEl);
  }
}

function onCourseClick(course) {
  const status = getStatus(course);

  // Si está bloqueado, no deja marcar
  if (status === "locked") return;

  // Toggle aprobado / no aprobado
  if (isApproved(course.id)) {
    // Si lo des-apruebas, también “caen” los dependientes automáticamente
    delete approved[course.id];
    cascadeUnapprove();
  } else {
    approved[course.id] = true;
  }

  saveState(approved);
  render();
}

function cascadeUnapprove() {
  // Repetimos hasta estabilizar: si un curso aprobado queda con prereqs no cumplidos, lo des-aprobamos.
  let changed = true;
  while (changed) {
    changed = false;
    for (const c of COURSES) {
      if (isApproved(c.id) && !prereqsMet(c)) {
        delete approved[c.id];
        changed = true;
      }
    }
  }
}

// ======================
// 5) Export / Import / Reset
// ======================
document.getElementById("resetBtn").addEventListener("click", () => {
  approved = {};
  saveState(approved);
  render();
});

document.getElementById("exportBtn").addEventListener("click", () => {
  const payload = {
    version: 1,
    exportedAt: new Date().toISOString(),
    approved,
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "malla_estado.json";
  a.click();

  URL.revokeObjectURL(url);
});

document.getElementById("importInput").addEventListener("change", async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  try {
    const txt = await file.text();
    const parsed = JSON.parse(txt);
    if (!parsed || typeof parsed !== "object" || !parsed.approved) return;

    approved = parsed.approved;
    saveState(approved);
    render();
  } catch {
    // si falla, no hace nada
  } finally {
    e.target.value = "";
  }
});

// Inicial
render();

