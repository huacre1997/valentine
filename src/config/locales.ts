import { appConfig } from "./config";

const theme = appConfig.theme as "tulips" | "sunflowers" | "roses";
const flowerEmoji =
  {
    tulips: "🌷",
    sunflowers: "🌻",
    roses: "🌹",
    lilies: "🪻",
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
    final_no_response_1: "No aceptaré un no como respuesta 😤...",
    final_no_response_2:
      "Oh no... 😢 Mi corazón está roto, pero aún te quiero. 💔",
    final_no_response_3:
      "Está bien... 😞 *me voy con mi caja de chocolates a llorar en un rincón* 🍫😭.",

    buttons: {
      hello: "Hola, buenos días! 😍🌞",
      no_disturb: "No moleste joven! 😤🚫",
      ask: "Pregunta con confianza 🙌💬",
      another_day: "Otro día joven! 😤⏳",
      yes: "Sí, claro! 😍💖",
      no: "Lo siento 😢💔",
      retry: "De acuerdo, pregúntame otra vez 🤭🔄",
      reconsider: "Reconsiderar respuesta 🤗🔄",
      final_no_response_1: "No, en serio no 😤🚫",
      final_no_response_2: "😬 Uy… mira la hora, es momento de irme 🚶‍♀️💨",
      final_yes_response_1: "De acuerdo, pregúntame otra vez 🤭🔄",
      try_again: "😏 Bueno, ya... vamos otra vez 🔄",
    },
  },
  en: {
    greetings: `Good morning, Miss {name}! 😊🌞${flowerEmoji}`,
    ask_question: "I have a question for you, if you don't mind 🤔💬",
    be_my_valentine: "Would you be my Valentine? 💘❤️",
    thank_you:
      "Thank you, my beautiful {name}, for accepting! You have no idea how happy it makes me to know that we will share this special day. 🥰🐉",
    bad_mood: "Oh no! You don’t seem to be in a good mood 😔...",
    sorry: "I'm really sorry, I didn't mean to bother you 😢...",
    final_no_response_1: "I refuse to take no for an answer! 😤...",
    final_no_response_2:
      "Oh no... 😢 My heart is shattered, but I still love you. 💔",
    final_no_response_3:
      "Alright then... 😞 *I'll just go cry in a corner with my box of chocolates* 🍫😭.",

    buttons: {
      hello: "Good morning! 😍🌞",
      no_disturb: "Don’t bother me! 😤🚫",
      ask: "Go ahead and ask 🙌💬",
      another_day: "Maybe another day! 😤⏳",
      yes: "Yes, of course! 😍💖",
      no: "Sorry 😢💔",
      retry: "Alright, ask me again 🤭🔄",
      reconsider: "Reconsider 🤗🔄",
      final_no_response_1: "No, seriously no 😤🚫",
      final_no_response_2: "😬 Oh wow… look at the time, gotta go! 🚶‍♀️💨",
      final_yes_response_1: "Alright, ask me again 🤭🔄",
      try_again: "😏 Alright, fine... let's go again 🔄",
    },
  },
} as const;
