const malla = {};

// 1° Semestre
malla["1° Semestre"] = [
  { nombre: "Anatomía general", requisitos: [] },
  { nombre: "Química general", requisitos: [] },
  { nombre: "Biología celular e histología", requisitos: [] },
  { nombre: "Matemáticas", requisitos: [] },
  { nombre: "Orientación Profesional", requisitos: [] },
  { nombre: "Electivo de Comunicación", requisitos: [] }
];

// 2° Semestre
malla["2° Semestre"] = [
  { nombre: "Aspectos Socio Antropológicos de la Nutrición", requisitos: [] },
  { nombre: "Química Orgánica", requisitos: ["Química general"] },
  { nombre: "Microbiología y Parasitología", requisitos: ["Biología celular e histología"] },
  { nombre: "Salud Pública y Nutrición", requisitos: ["Biología celular e histología"] },
  { nombre: "Planificación Alimentaria I", requisitos: [] }
];

// 3° Semestre
malla["3° Semestre"] = [
  { nombre: "Bioquímica", requisitos: ["Química Orgánica"] },
  { nombre: "Fisiología General", requisitos: ["Anatomía general"] },
  { nombre: "Bases de la Nutrición I", requisitos: ["Química general", "Biología celular e histología"] },
  { nombre: "Planificación Alimentaria II", requisitos: ["Planificación Alimentaria I"] },
  { nombre: "Valoración Nutricional I", requisitos: [] },
  { nombre: "Electivo de Desarrollo del Pensamiento", requisitos: [] }
];

// 4° Semestre
malla["4° Semestre"] = [
  { nombre: "Fisiopatología", requisitos: ["Fisiología General"] },
  { nombre: "Bases de la Nutrición II", requisitos: ["Bases de la Nutrición I"] },
  { nombre: "Valoración Nutricional II", requisitos: ["Valoración Nutricional I"] },
  { nombre: "Bromatología y Bioquímica de los Alimentos", requisitos: ["Bioquímica"] },
  { nombre: "Principios en Economía y Administración", requisitos: [] },
  { nombre: "Integrado de Ciclo Inicial", requisitos: [
    "Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación",
    "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición",
    "Planificación Alimentaria I", "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I",
    "Electivo de Desarrollo del Pensamiento"
  ] }
];

// 5° Semestre
malla["5° Semestre"] = [
  { nombre: "Farmacología", requisitos: [] },
  { nombre: "Bioestadística", requisitos: [] },
  { nombre: "Nutrición Clínica", requisitos: ["Bases de la Nutrición II", "Fisiopatología"] },
  { nombre: "Alimentación Comunitaria Sustentable", requisitos: ["Salud Pública y Nutrición"] },
  { nombre: "Dirección de Personas", requisitos: [] },
  { nombre: "Electivo de Desarrollo Personal", requisitos: [] }
];

// 6° Semestre
malla["6° Semestre"] = [
  { nombre: "Geriatría y Gerontología Aplicada", requisitos: ["Nutrición Clínica"] },
  { nombre: "Nutrición Materno Infanto - Juvenil I", requisitos: ["Bases de la Nutrición II"] },
  { nombre: "Formulación de Alimentos", requisitos: ["Bromatología y Bioquímica de los Alimentos"] },
  { nombre: "Aseguramiento de la Calidad e Inocuidad Alimentaria I", requisitos: ["Microbiología y Parasitología"] },
  { nombre: "Formulación de Proyectos en Salud y Alimentación", requisitos: [] },
  { nombre: "Electivo de Responsabilidad Social", requisitos: [] }
];

// 7° Semestre
malla["7° Semestre"] = [
  { nombre: "Dieto terapia del Adulto I", requisitos: ["Nutrición Clínica"] },
  { nombre: "Nutrición Materno Infanto - Juvenil II", requisitos: ["Nutrición Materno Infanto - Juvenil I"] },
  { nombre: "Educación en Salud y Alimentación", requisitos: [] },
  { nombre: "Aseguramiento de la Calidad e Inocuidad Alimentaria II", requisitos: ["Aseguramiento de la Calidad e Inocuidad Alimentaria I"] },
  { nombre: "Metodología de la Investigación", requisitos: [] },
  { nombre: "Electivo de Ética", requisitos: [] }
];

// 8° Semestre
malla["8° Semestre"] = [
  { nombre: "Dieto terapia del Adulto II", requisitos: ["Dieto terapia del Adulto I"] },
  { nombre: "Atención Primaria y Salud Pública", requisitos: ["Educación en Salud y Alimentación"] },
  { nombre: "Administración de Empresas de Alimentos", requisitos: ["Dirección de Personas"] },
  { nombre: "Seminario de Grado", requisitos: ["Metodología de la Investigación"] },
  { nombre: "Integrado de Ciclo Intermedio", requisitos: [
    "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas",
    "Electivo de Desarrollo Personal", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos",
    "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social",
    "Dieto terapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación",
    "Aseguramiento de la Calidad e Inocuidad Alimentaria II", "Metodología de la Investigación", "Electivo de Ética"
  ] }
];

// 9° Semestre
malla["9° Semestre"] = [
  { nombre: "Práctica Profesional Salud Pública", requisitos: ["Integrado de Ciclo Intermedio"] },
  { nombre: "Práctica Profesional Gestión e Inocuidad Alimentaria", requisitos: ["Integrado de Ciclo Intermedio"] }
];

// 10° Semestre
malla["10° Semestre"] = [
  { nombre: "Práctica Profesional Clínica", requisitos: ["Integrado de Ciclo Intermedio"] },
  { nombre: "Práctica Profesional Alimentación Institucional", requisitos: ["Integrado de Ciclo Intermedio"] }
];

function renderMalla() {
  const container = document.getElementById("malla-container");
  for (const semestre in malla) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";

    const title = document.createElement("h2");
    title.textContent = semestre;
    semestreDiv.appendChild(title);

    malla[semestre].forEach(ramo => {
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo";
      ramoDiv.innerHTML = `<strong>${ramo.nombre}</strong><br><small>Requisitos: ${ramo.requisitos.length > 0 ? ramo.requisitos.join(", ") : "Ninguno"}</small>`;
      semestreDiv.appendChild(ramoDiv);
    });

    container.appendChild(semestreDiv);
  }
}

document.addEventListener("DOMContentLoaded", renderMalla);
