/* ============================================================
   SpeakUp Pro - Lógica Principal (script.js)
   ============================================================ */

// ============= DATOS DEL CURSO =============
const courseData = [
  {
    id: 1,
    title: "Saludos",
    icon: "👋",
    level: "A1",
    reward: 100,
    desc: "A1 - Saluda y preséntate.",
    phrases: [
      { en: "Hello, nice to meet you!", es: "¡Hola, encantado de conocerte!", img: "👋" },
      { en: "What's your name?", es: "¿Cómo te llamas?", img: "❓" },
      { en: "My name is John.", es: "Mi nombre es John.", img: "🪪" },
      { en: "How are you?", es: "¿Cómo estás?", img: "😊" },
      { en: "I'm fine, thanks!", es: "¡Estoy bien, gracias!", img: "👍" }
    ],
    quiz: [
      { q: "'Nice to meet you':", options: ["Adiós", "Encantado de conocerte", "Noche"], answer: 1 },
      { q: "Presentarte:", options: ["Hungry", "Hi, I'm John", "Bye"], answer: 1 },
      { q: "Responde 'How are you?':", options: ["I'm fine!", "My name", "See you"], answer: 0 }
    ]
  },
  {
    id: 2,
    title: "Información Personal",
    icon: "🪪",
    level: "A1",
    reward: 120,
    desc: "A1 - Datos personales.",
    phrases: [
      { en: "Where are you from?", es: "¿De dónde eres?", img: "🌍" },
      { en: "I'm from Spain.", es: "Soy de España.", img: "🇪🇸" },
      { en: "What do you do?", es: "¿A qué te dedicas?", img: "💼" },
      { en: "I'm a student.", es: "Soy estudiante.", img: "🎓" },
      { en: "How old are you?", es: "¿Cuántos años tienes?", img: "🎂" }
    ],
    quiz: [
      { q: "Preguntar origen:", options: ["Time?", "Where are you from?", "Much?"], answer: 1 },
      { q: "'I'm a student':", options: ["Trabajo", "Soy estudiante", "No sé"], answer: 1 },
      { q: "Preguntar profesión:", options: ["What do you do?", "Live?", "When?"], answer: 0 }
    ]
  },
  {
    id: 3,
    title: "Hobbies",
    icon: "🎨",
    level: "A2",
    reward: 150,
    desc: "A2 - Tus gustos.",
    phrases: [
      { en: "What do you like to do?", es: "¿Qué te gusta hacer?", img: "🎨" },
      { en: "I enjoy reading.", es: "Disfruto leer.", img: "📚" },
      { en: "I love traveling.", es: "Me encanta viajar.", img: "✈️" },
      { en: "We have a lot in common.", es: "Tenemos mucho en común.", img: "🤝" },
      { en: "That sounds interesting!", es: "¡Suena interesante!", img: "💡" }
    ],
    quiz: [
      { q: "Preguntar hobbies:", options: ["Do you have hobbies?", "Time?", "Hungry?"], answer: 0 },
      { q: "'in common':", options: ["Lejos", "En común", "Solo"], answer: 1 },
      { q: "Mostrar interés:", options: ["Tired", "That sounds interesting!", "Bye"], answer: 1 }
    ]
  },
  {
    id: 4,
    title: "Small Talk",
    icon: "☕",
    level: "A2",
    reward: 170,
    desc: "A2 - Charla casual.",
    phrases: [
      { en: "Nice weather today!", es: "¡Buen clima hoy!", img: "☀️" },
      { en: "How was your weekend?", es: "¿Cómo fue tu finde?", img: "📅" },
      { en: "Did you do anything fun?", es: "¿Hiciste algo divertido?", img: "🎉" },
      { en: "I know what you mean.", es: "Sé a qué te refieres.", img: "🤔" },
      { en: "It was great talking to you.", es: "Fue genial hablar contigo.", img: "💬" }
    ],
    quiz: [
      { q: "Small talk:", options: ["El clima", "Problemas", "Política"], answer: 0 },
      { q: "'How was your weekend?':", options: ["¿Hora?", "¿Cómo fue tu finde?", "¿Dónde?"], answer: 1 },
      { q: "Despedida:", options: ["Great talking to you", "Hate this", "Money"], answer: 0 }
    ]
  },
  {
    id: 5,
    title: "Opiniones",
    icon: "💭",
    level: "B1",
    reward: 200,
    desc: "B1 - Expresa opiniones.",
    phrases: [
      { en: "In my opinion...", es: "En mi opinión...", img: "💭" },
      { en: "I totalmente agree.", es: "Totalmente de acuerdo.", img: "✅" },
      { en: "I see your point.", es: "Entiendo tu punto.", img: "👀" },
      { en: "What are your thoughts?", es: "¿Qué opinas?", img: "🧠" },
      { en: "That makes sense.", es: "Eso tiene sentido.", img: "💡" }
    ],
    quiz: [
      { q: "Dar opinión:", options: ["In my opinion", "Bye", "Much?"], answer: 0 },
      { q: "'I totalmente agree':", options: ["No acuerdo", "Totalmente de acuerdo", "No entiendo"], answer: 1 },
      { q: "Pedir opinión:", options: ["What are your thoughts?", "Where?", "Time?"], answer: 0 }
    ]
  },
  {
    id: 6,
    title: "Amistad",
    icon: "🤝",
    level: "B1",
    reward: 230,
    desc: "B1 - Construye amistad.",
    phrases: [
      { en: "Let's keep in touch!", es: "¡Mantengámonos en contacto!", img: "📱" },
      { en: "We should hang out.", es: "Deberíamos salir.", img: "🍻" },
      { en: "Can I get your number?", es: "¿Me das tu número?", img: "📞" },
      { en: "You're easy to talk to.", es: "Es fácil hablar contigo.", img: "😊" },
      { en: "Let's grab a coffee.", es: "Tomemos un café.", img: "☕" }
    ],
    quiz: [
      { q: "'Keep in touch':", options: ["Adiós", "En contacto", "No conozco"], answer: 1 },
      { q: "Proponer salir:", options: ["Hang out", "Leaving", "Food"], answer: 0 },
      { q: "'Your number?':", options: ["¿Hora?", "¿Tu número?", "¿Dónde?"], answer: 1 }
    ]
  }
];

const motivationalQuotes = [
  { en: "The limits of my language are the limits of my world.", es: "Los límites de mi idioma son los límites de mi mundo.", author: "Wittgenstein" },
  { en: "A different language is a different vision of life.", es: "Un idioma diferente es una visión diferente de la vida.", author: "Fellini" },
  { en: "Learning is a treasure that follows its owner everywhere.", es: "El aprendizaje es un tesoro que sigue a su dueño a todas partes.", author: "Proverb" },
  { en: "Practice makes progress, not perfection.", es: "La práctica hace el progreso, no la perfección.", author: "Anonymous" },
  { en: "Every expert was once a beginner.", es: "Todo experto fue alguna vez un principiante.", author: "Helen Hayes" },
  { en: "Small steps every day lead to big results.", es: "Pequeños pasos cada día llevan a grandes resultados.", author: "Anonymous" },
  { en: "You don't have to be perfect to be amazing.", es: "No tienes que ser perfecto para ser increíble.", author: "Anonymous" }
];

const surpriseIncentives = [
  { icon: "🎁", title: "¡Caja Sorpresa!", desc: "Tu constancia merece un premio. ¡Sigue así!", pts: 50 },
  { icon: "🍀", title: "¡Momento de la Suerte!", desc: "El destino premia a los que estudian. ¡Bonus para ti!", pts: 75 },
  { icon: "🚀", title: "¡Impulso Extra!", desc: "Estás en racha. Aquí va un empujón para tu meta.", pts: 60 },
  { icon: "⭐", title: "¡Estrella del Día!", desc: "Tu dedicación brilla. ¡Recompensa especial!", pts: 80 },
  { icon: "🎯", title: "¡Tiro Certero!", desc: "Rompe la monotonía con este bonus sorpresa.", pts: 55 },
  { icon: "💎", title: "¡Diamante Oculto!", desc: "Encontraste un tesoro escondido por estudiar.", pts: 100 }
];

const achievementsList = [
  { id: "first_step", icon: "🌱", title: "Primer Paso", desc: "Completa Nivel 1" },
  { id: "srs_10", icon: "🔁", title: "Repasador", desc: "10 repasos SRS" },
  { id: "srs_master", icon: "🧠", title: "Memoria de Acero", desc: "Domina 10 tarjetas" },