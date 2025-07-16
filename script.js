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
  { nombre: "Salud Pública y Nutrición", requisitos: [] },
  { nombre: "Planificación Alimentaria I", requisitos: ["Matemáticas"] },
  { nombre: "Electivo de Comunicación", requisitos: [] }
];

// 3° Semestre
malla["3° Semestre"] = [
  { nombre: "Bioquímica", requisitos: ["Química Orgánica"] },
  { nombre: "Fisiología General", requisitos: ["Anatomía general", "Biología celular e histología"] },
  { nombre: "Bases de la Nutrición I", requisitos: ["Química Orgánica"] },
  { nombre: "Planificación Alimentaria II", requisitos: ["Microbiología y Parasitología", "Planificación Alimentaria I"] },
  { nombre: "Valoración Nutricional I", requisitos: ["Anatomía general", "Planificación Alimentaria I"] },
  { nombre: "Electivo de Desarrollo del Pensamiento", requisitos: [] }
];

// 4° Semestre
malla["4° Semestre"] = [
  { nombre: "Fisiopatología", requisitos: ["Fisiología General"] },
  { nombre: "Bases de la Nutrición II", requisitos: ["Bases de la Nutrición I"] },
  { nombre: "Valoración Nutricional II", requisitos: ["Valoración Nutricional I"] },
  { nombre: "Bromatología y Bioquímica de los Alimentos", requisitos: ["Bioquímica"] },
  { nombre: "Principios en Economía y Administración", requisitos: ["Matemáticas"] },
  { nombre: "Integrado de Ciclo Inicial", requisitos: ["Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I"] }
];

// 5° Semestre
malla["5° Semestre"] = [
  { nombre: "Farmacología", requisitos: ["Fisiopatología"] },
  { nombre: "Bioestadística", requisitos: ["Matemáticas"] },
  { nombre: "Nutrición Clínica", requisitos: ["Fisiopatología", "Bases de la Nutrición II", "Integrado de Ciclo Inicial"] },
  { nombre: "Alimentación Comunitaria Sustentable", requisitos: ["Aspectos Socio Antropológicos de la Nutrición", "Salud Pública y Nutrición"] },
  { nombre: "Dirección de Personas", requisitos: ["Principios en Economía y Administración"] },
  { nombre: "Electivo de Desarrollo Personal", requisitos: [] }
];

// 6° Semestre
malla["6° Semestre"] = [
  { nombre: "Geriatría y Gerontología Aplicada", requisitos: ["Nutrición Clínica", "Alimentación Comunitaria Sustentable"] },
  { nombre: "Nutrición Materno Infanto - Juvenil I", requisitos: ["Bases de la Nutrición II", "Valoración Nutricional II"] },
  { nombre: "Formulación de Alimentos", requisitos: ["Bromatología y Bioquímica de los Alimentos"] },
  { nombre: "Aseguramiento de la Calidad e Inocuidad Alimentaria I", requisitos: ["Bromatología y Bioquímica de los Alimentos"] },
  { nombre: "Formulación de Proyectos en Salud y Alimentación", requisitos: ["Alimentación Comunitaria Sustentable"] },
  { nombre: "Electivo de Responsabilidad Social", requisitos: [] }
];

// 7° Semestre
malla["7° Semestre"] = [
  { nombre: "Dietoterapia del Adulto I", requisitos: ["Planificación Alimentaria II", "Geriatría y Gerontología Aplicada"] },
  { nombre: "Nutrición Materno Infanto - Juvenil II", requisitos: ["Planificación Alimentaria II", "Nutrición Materno Infanto - Juvenil I"] },
  { nombre: "Educación en Salud y Alimentación", requisitos: ["Alimentación Comunitaria Sustentable"] },
  { nombre: "Aseguramiento de la Calidad e Inocuidad Alimentaria II", requisitos: ["Aseguramiento de la Calidad e Inocuidad Alimentaria I"] },
  { nombre: "Metodología de la Investigación", requisitos: ["Bioestadística"] },
  { nombre: "Electivo de Ética", requisitos: [] }
];

// 8° Semestre
malla["8° Semestre"] = [
  { nombre: "Dietoterapia del Adulto II", requisitos: ["Dietoterapia del Adulto I"] },
  { nombre: "Atención Primaria y Salud Pública", requisitos: ["Dietoterapia del Adulto I", "Nutrición Materno Infanto - Juvenil II"] },
  { nombre: "Administración de Empresas de Alimentos", requisitos: ["Planificación Alimentaria II", "Dirección de Personas", "Aseguramiento de la Calidad e Inocuidad Alimentaria II"] },
  { nombre: "Seminario de Grado", requisitos: ["Metodología de la Investigación"] },
  { nombre: "Integrado de Ciclo Intermedio", requisitos: ["Dietoterapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II"] }
];

// 9° Semestre
malla["9° Semestre"] = [
  { nombre: "Práctica Profesional Salud Pública", requisitos: ["Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación", "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición", "Planificación Alimentaria I", "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I", "Fisiopatología", "Bases de la Nutrición II", "Valoración Nutricional II", "Bromatología y Bioquímica de los Alimentos", "Principios en Economía y Administración", "Integrado de Ciclo Inicial", "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos", "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social", "Dietoterapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II", "Metodología de la Investigación", "Electivo de Ética", "Dietoterapia del Adulto II", "Atención Primaria y Salud Pública", "Administración de Empresas de Alimentos", "Seminario de Grado", "Integrado de Ciclo Intermedio"] },
  { nombre: "Práctica Profesional Gestión e Inocuidad Alimentaria", requisitos: ["Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación", "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición", "Planificación Alimentaria I", "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I", "Fisiopatología", "Bases de la Nutrición II", "Valoración Nutricional II", "Bromatología y Bioquímica de los Alimentos", "Principios en Economía y Administración", "Integrado de Ciclo Inicial", "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos", "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social", "Dietoterapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II", "Metodología de la Investigación", "Electivo de Ética", "Dietoterapia del Adulto II", "Atención Primaria y Salud Pública", "Administración de Empresas de Alimentos", "Seminario de Grado", "Integrado de Ciclo Intermedio"] }
];

// 10° Semestre
malla["10° Semestre"] = [
  { nombre: "Práctica Profesional Clínica", requisitos: ["Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación", "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición", "Planificación Alimentaria I", "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I", "Fisiopatología", "Bases de la Nutrición II", "Valoración Nutricional II", "Bromatología y Bioquímica de los Alimentos", "Principios en Economía y Administración", "Integrado de Ciclo Inicial", "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos", "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social", "Dietoterapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II", "Metodología de la Investigación", "Electivo de Ética", "Dietoterapia del Adulto II", "Atención Primaria y Salud Pública", "Administración de Empresas de Alimentos", "Seminario de Grado", "Integrado de Ciclo Intermedio"] },
  { nombre: "Práctica Profesional Alimentación Institucional", requisitos: ["Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación", "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición", "Planificación Alimentaria I", "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I", "Fisiopatología", "Bases de la Nutrición II", "Valoración Nutricional II", "Bromatología y Bioquímica de los Alimentos", "Principios en Economía y Administración", "Integrado de Ciclo Inicial", "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos", "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social", "Dietoterapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II", "Metodología de la Investigación", "Electivo de Ética", "Dietoterapia del Adulto II", "Atención Primaria y Salud Pública", "Administración de Empresas de Alimentos", "Seminario de Grado", "Integrado de Ciclo Intermedio"] }
];

// Función para renderizar la malla en el contenedor
function renderMalla() {
  const container = document.getElementById("malla-container");
  container.innerHTML = ""; // Limpiar antes de renderizar

  for (const semestre in malla) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";

    const title = document.createElement("h2");
    title.textContent = semestre;
    semestreDiv.appendChild(title);

    malla[semestre].forEach(ramo => {
      const ramoDiv = document.createElement("div");
      ramoDiv.className = "ramo";

      const requisitosTexto = ramo.requisitos.length > 0 ? ramo.requisitos.join(", ") : "Ninguno";

      ramoDiv.innerHTML = `
        <label>
          <input type="checkbox" />
          <span class="ramo-nombre">${ramo.nombre}</span><br>
          <small>Requisitos: ${requisitosTexto}</small>
        </label>
      `;

      semestreDiv.appendChild(ramoDiv);
    });

    container.appendChild(semestreDiv);
  }
}

// Ejecutar render al cargar la página
document.addEventListener("DOMContentLoaded", renderMalla);
