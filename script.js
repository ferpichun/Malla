// script.js

const courses = [
  // 1er semestre
  { name: "Anatomía general", prerequisites: [] },
  { name: "Química general", prerequisites: [] },
  { name: "Biología celular e histología", prerequisites: [] },
  { name: "Matemáticas", prerequisites: [] },
  { name: "Orientación Profesional", prerequisites: [] },
  { name: "Electivo de Comunicación", prerequisites: [] },

  // 2do semestre
  { name: "Aspectos Socio Antropológicos de la Nutrición", prerequisites: [] },
  { name: "Química Orgánica", prerequisites: ["Química general"] },
  { name: "Microbiología y Parasitología", prerequisites: ["Biología celular e histología"] },
  { name: "Salud Pública y Nutrición", prerequisites: [] },
  { name: "Planificación Alimentaria I", prerequisites: ["Matemáticas"] },
  { name: "Electivo de Comunicación", prerequisites: [] },

  // 3er semestre
  { name: "Bioquímica", prerequisites: ["Química Orgánica"] },
  { name: "Fisiología General", prerequisites: ["Anatomía general", "Biología celular e histología"] },
  { name: "Bases de la Nutrición I", prerequisites: ["Química Orgánica"] },
  { name: "Planificación Alimentaria II", prerequisites: ["Microbiología y Parasitología", "Planificación Alimentaria I"] },
  { name: "Valoración Nutricional I", prerequisites: ["Anatomía general", "Planificación Alimentaria I"] },
  { name: "Electivo de Desarrollo del Pensamiento", prerequisites: [] },

  // 4to semestre
  { name: "Fisiopatología", prerequisites: ["Fisiología General"] },
  { name: "Bases de la Nutrición II", prerequisites: ["Bases de la Nutrición I"] },
  { name: "Valoración Nutricional II", prerequisites: ["Valoración Nutricional I"] },
  { name: "Bromatología y Bioquímica de los Alimentos", prerequisites: ["Bioquímica"] },
  { name: "Principios en Economía y Administración", prerequisites: ["Matemáticas"] },
  { name: "Integrado de Ciclo Inicial", prerequisites: ["Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I"] },

  // 5to semestre
  { name: "Farmacología", prerequisites: ["Fisiopatología"] },
  { name: "Bioestadística", prerequisites: ["Matemáticas"] },
  { name: "Nutrición Clínica", prerequisites: ["Fisiopatología", "Bases de la Nutrición II", "Integrado de Ciclo Inicial"] },
  { name: "Alimentación Comunitaria Sustentable", prerequisites: ["Aspectos Socio Antropológicos de la Nutrición", "Salud Pública y Nutrición"] },
  { name: "Dirección de Personas", prerequisites: ["Principios en Economía y Administración"] },
  { name: "Electivo de Desarrollo Personal", prerequisites: [] },

  // 6to semestre
  { name: "Geriatría y Gerontología Aplicada", prerequisites: ["Nutrición Clínica", "Alimentación Comunitaria Sustentable"] },
  { name: "Nutrición Materno Infanto - Juvenil I", prerequisites: ["Bases de la Nutrición II", "Valoración Nutricional II"] },
  { name: "Formulación de Alimentos", prerequisites: ["Bromatología y Bioquímica de los Alimentos"] },
  { name: "Aseguramiento de la Calidad e Inocuidad Alimentaria I", prerequisites: ["Bromatología y Bioquímica de los Alimentos"] },
  { name: "Formulación de Proyectos en Salud y Alimentación", prerequisites: ["Alimentación Comunitaria Sustentable"] },
  { name: "Electivo de Responsabilidad Social", prerequisites: [] },

  // 7mo semestre
  { name: "Dieto terapia del Adulto I", prerequisites: ["Planificación Alimentaria II", "Geriatría y Gerontología Aplicada"] },
  { name: "Nutrición Materno Infanto - Juvenil II", prerequisites: ["Planificación Alimentaria II", "Nutrición Materno Infanto - Juvenil I"] },
  { name: "Educación en Salud y Alimentación", prerequisites: ["Alimentación Comunitaria Sustentable"] },
  { name: "Aseguramiento de la Calidad e Inocuidad Alimentaria II", prerequisites: ["Aseguramiento de la Calidad e Inocuidad Alimentaria I"] },
  { name: "Metodología de la Investigación", prerequisites: ["Bioestadística"] },
  { name: "Electivo de Ética", prerequisites: [] },

  // 8vo semestre
  { name: "Dieto terapia del Adulto II", prerequisites: ["Dieto terapia del Adulto I"] },
  { name: "Atención Primaria y Salud Pública", prerequisites: ["Dieto terapia del Adulto I", "Nutrición Materno Infanto - Juvenil II"] },
  { name: "Administración de Empresas de Alimentos", prerequisites: ["Planificación Alimentaria II", "Dirección de Personas", "Aseguramiento de la Calidad e Inocuidad Alimentaria II"] },
  { name: "Seminario de Grado", prerequisites: ["Metodología de la Investigación"] },
  { name: "Integrado de Ciclo Intermedio", prerequisites: ["Dieto terapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II"] },
];

function renderCourses() {
  const container = document.getElementById("courses");
  container.innerHTML = "";
  courses.forEach((course) => {
    const courseDiv = document.createElement("div");
    courseDiv.className = "course";
    courseDiv.textContent = course.name;
    if (course.prerequisites.length > 0) {
      courseDiv.title = `Requiere: ${course.prerequisites.join(", ")}`;
    }
    courseDiv.onclick = () => {
      courseDiv.classList.toggle("completed");
      updateAvailability();
    };
    container.appendChild(courseDiv);
  });
}

function updateAvailability() {
  const completed = Array.from(document.getElementsByClassName("completed"))
    .map((el) => el.textContent);
  document.querySelectorAll(".course").forEach((el) => {
    const course = courses.find((c) => c.name === el.textContent);
    const available = course.prerequisites.every((p) => completed.includes(p));
    el.classList.toggle("available", available);
  });
}

renderCourses();
// 9º Semestre
malla["9° Semestre"] = [
  { nombre: "Práctica Profesional Salud Pública", requisitos: [
    "Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación",
    "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición", "Planificación Alimentaria I",
    "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I", "Electivo de Desarrollo del Pensamiento",
    "Fisiopatología", "Bases de la Nutrición II", "Valoración Nutricional II", "Bromatología y Bioquímica de los Alimentos", "Principios en Economía y Administración",
    "Integrado de Ciclo Inicial", "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas",
    "Electivo de Desarrollo Personal", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos",
    "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social",
    "Dieto terapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II",
    "Metodología de la Investigación", "Electivo de Ética", "Dieto terapia del Adulto II", "Atención Primaria y Salud Pública", "Administración de Empresas de Alimentos",
    "Seminario de Grado", "Integrado de Ciclo Intermedio"
  ]},
  { nombre: "Práctica Profesional Gestión e Inocuidad Alimentaria", requisitos: [
    // mismos requisitos que la práctica anterior
    "Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación",
    "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición", "Planificación Alimentaria I",
    "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I", "Electivo de Desarrollo del Pensamiento",
    "Fisiopatología", "Bases de la Nutrición II", "Valoración Nutricional II", "Bromatología y Bioquímica de los Alimentos", "Principios en Economía y Administración",
    "Integrado de Ciclo Inicial", "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas",
    "Electivo de Desarrollo Personal", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos",
    "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social",
    "Dieto terapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II",
    "Metodología de la Investigación", "Electivo de Ética", "Dieto terapia del Adulto II", "Atención Primaria y Salud Pública", "Administración de Empresas de Alimentos",
    "Seminario de Grado", "Integrado de Ciclo Intermedio"
  ]}
];

// 10º Semestre
malla["10° Semestre"] = [
  { nombre: "Práctica Profesional Clínica", requisitos: [
    // mismos requisitos que las anteriores prácticas
    "Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación",
    "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición", "Planificación Alimentaria I",
    "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I", "Electivo de Desarrollo del Pensamiento",
    "Fisiopatología", "Bases de la Nutrición II", "Valoración Nutricional II", "Bromatología y Bioquímica de los Alimentos", "Principios en Economía y Administración",
    "Integrado de Ciclo Inicial", "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas",
    "Electivo de Desarrollo Personal", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos",
    "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social",
    "Dieto terapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II",
    "Metodología de la Investigación", "Electivo de Ética", "Dieto terapia del Adulto II", "Atención Primaria y Salud Pública", "Administración de Empresas de Alimentos",
    "Seminario de Grado", "Integrado de Ciclo Intermedio"
  ]},
  { nombre: "Práctica Profesional Alimentación Institucional", requisitos: [
    // mismos requisitos que anteriores prácticas
    "Anatomía general", "Química general", "Biología celular e histología", "Matemáticas", "Orientación Profesional", "Electivo de Comunicación",
    "Aspectos Socio Antropológicos de la Nutrición", "Química Orgánica", "Microbiología y Parasitología", "Salud Pública y Nutrición", "Planificación Alimentaria I",
    "Bioquímica", "Fisiología General", "Bases de la Nutrición I", "Planificación Alimentaria II", "Valoración Nutricional I", "Electivo de Desarrollo del Pensamiento",
    "Fisiopatología", "Bases de la Nutrición II", "Valoración Nutricional II", "Bromatología y Bioquímica de los Alimentos", "Principios en Economía y Administración",
    "Integrado de Ciclo Inicial", "Farmacología", "Bioestadística", "Nutrición Clínica", "Alimentación Comunitaria Sustentable", "Dirección de Personas",
    "Electivo de Desarrollo Personal", "Geriatría y Gerontología Aplicada", "Nutrición Materno Infanto - Juvenil I", "Formulación de Alimentos",
    "Aseguramiento de la Calidad e Inocuidad Alimentaria I", "Formulación de Proyectos en Salud y Alimentación", "Electivo de Responsabilidad Social",
    "Dieto terapia del Adulto I", "Nutrición Materno Infanto - Juvenil II", "Educación en Salud y Alimentación", "Aseguramiento de la Calidad e Inocuidad Alimentaria II",
    "Metodología de la Investigación", "Electivo de Ética", "Dieto terapia del Adulto II", "Atención Primaria y Salud Pública", "Administración de Empresas de Alimentos",
    "Seminario de Grado", "Integrado de Ciclo Intermedio"
  ]}
];
