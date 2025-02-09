import { appConfig } from "./config";

const theme = appConfig.theme as "tulips" | "sunflowers" | "roses";
const flowerEmoji =
  {
    tulips: "🌷",
    sunflowers: "🌻",
    roses: "🌹",
  }[theme] || "🌸"; // Usa 🌸 como valor por defecto si el tema no coincide

export const locales = {
  es: {
    greetings: `Hola señorita {name}, muy buenos días 😊🌞${flowerEmoji}`,
    ask_question: "Deseo hacerle una pregunta si no fuera mucha molestia 🤔💬",
    be_my_valentine: "¿Deseas ser mi San Valentín? 💘❤️",
    thank_you:
      "¡Gracias mi {name} hermosa, por aceptar! No sabes lo feliz que me hace saber que compartiremos este día tan especial. 🥰🐉",
    bad_mood: "¡Oh! Parece que no estás de buen humor 😔...",
    sorry: "Lo siento mucho, no era mi intención molestarla 😢...",
    no_response: "No aceptaré un no como respuesta 😤...",
    buttons: {
      hello: "Hola, buenos días! 😍",
      no_disturb: "No moleste joven! 😤",
      ask: "Pregunta con confianza 🙌",
      another_day: "Otro día joven! 😤",
      yes: "Sí, claro 😍",
      no: "Lo siento 😢",
      retry: "Volver a intentarlo",
      reconsider: "Reconsiderar respuesta 🤗",
    },
  },
  en: {
    greetings: `Good morning, Miss {name}! 😊🌞${flowerEmoji}`,
    ask_question: "I have a question for you, if you don't mind 🤔💬",
    be_my_valentine: "Would you be my Valentine? 💘❤️",
    thank_you:
      "Thank you, my beautiful {name}, for accepting! You have no idea how happy it makes me to know that we will share this special day. 🥰🐉",
    bad_mood: "Oh no! You seem to be in a bad mood 😔...",
    sorry: "I'm so sorry, I didn't mean to bother you 😢...",
    no_response: "I won't accept a no as an answer 😤...",
    buttons: {
      hello: "Good morning! 😍",
      no_disturb: "Don't bother me! 😤",
      ask: "Go ahead and ask 🙌",
      another_day: "Maybe another day! 😤",
      yes: "Yes, of course! 😍",
      no: "Sorry 😢",
      retry: "Try again",
      reconsider: "Reconsider 🤗",
    },
  },
} as const;
