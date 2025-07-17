const SUBJECTS = [
  { name: "Fundamentos de matemáticas", prerequisites: [], done: false },
  { name: "Cálculo diferencial", prerequisites: ["Fundamentos de matemáticas"], done: false },
  { name: "Álgebra", prerequisites: ["Fundamentos de matemáticas"], done: false },
  { name: "Fundamentos de programación", prerequisites: [], done: false },
  { name: "Fundamentos de física", prerequisites: [], done: false },
  { name: "Desarrollo personal", prerequisites: [], done: false },
  { name: "Desafíos de ingeniería", prerequisites: [], done: false },

  { name: "Ingeniería, innovación y emprendimiento", prerequisites: ["Desafíos de ingeniería"], done: false },
  { name: "Programación", prerequisites: ["Fundamentos de programación"], done: false },
  { name: "Química para ingeniería", prerequisites: [], done: false },

  { name: "Cálculo integral y series", prerequisites: ["Cálculo diferencial"], done: false },
  { name: "Álgebra lineal", prerequisites: ["Álgebra"], done: false },
  { name: "Física mecánica", prerequisites: ["Fundamentos de física", "Cálculo diferencial"], done: false },
  { name: "Tópicos de formación general para ingeniería industrial", prerequisites: ["Desarrollo personal", "Ingeniería, innovación y emprendimiento"], done: false },
  { name: "Alfabetización académica para ingeniería I", prerequisites: [], done: false },
  { name: "Tipe sello UV I", prerequisites: ["Ingeniería, innovación y emprendimiento"], done: false },
  { name: "Idioma I", prerequisites: [], done: false },

  { name: "Cálculo en varias variables", prerequisites: ["Cálculo integral y series", "Álgebra lineal"], done: false },
  { name: "Ecuaciones diferenciales ordinarias", prerequisites: ["Cálculo integral y series", "Álgebra lineal"], done: false },
  { name: "Física calor y ondas", prerequisites: ["Cálculo integral y series", "Física mecánica"], done: false },
  { name: "Administración de empresas y organizaciones", prerequisites: ["Tópicos de formación general para ingeniería industrial", "Alfabetización académica para ingeniería I"], done: false },
  { name: "Tipo sello UV II", prerequisites: ["Tipe sello UV I"], done: false },
  { name: "Idioma II", prerequisites: ["Idioma I"], done: false }

  // Puedes seguir agregando el resto aquí si lo deseas
];
