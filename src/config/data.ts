import { appConfig } from "./config";
import { locales } from "./locales";

const NAME = appConfig.userName;
const LANGUAGE = appConfig.language as keyof typeof locales;
const THEME = appConfig.theme; // Tema por defecto: rosas

const t = locales[LANGUAGE];

// Definir fondos y clases de botones por tema
const themeConfig = {
  roses: {
    backgrounds: [
      "/background/roses/bg_roses1.png",
      "/background/roses/bg_roses2.png",
      "/background/roses/bg_roses3.png",
      "/background/roses/bg_roses4.png",
    ],
    buttonClass: "rose-btn",
  },
  tulips: {
    backgrounds: [
      "/background/tulips/bg_tulips1.png",
      "/background/tulips/bg_tulips2.png",
      "/background/tulips/bg_tulips3.png",
      "/background/tulips/bg_tulips4.png",
    ],
    buttonClass: "tulip-btn",
  },
  sunflowers: {
    backgrounds: [
      "/background/bg_sunflowers1.png",
      "/background/bg_sunflowers2.png",
      "/background/bg_sunflowers3.png",
      "/background/bg_sunflowers4.png",
    ],
    buttonClass: "sunflower-btn",
  },
};

// Obtener configuración del tema actual
const { backgrounds, buttonClass } =
  themeConfig[THEME as keyof typeof themeConfig];

const screens = [
  {
    screenNumber: 1,
    message: t.greetings.replace("{name}", NAME),
    background: backgrounds[0],
    buttons: [
      {
        text: t.buttons.hello,
        className: `${buttonClass} btn-primary`,
        nextScreen: 2,
      },
      {
        text: t.buttons.no_disturb,
        className: `${buttonClass} btn-primary`,
        nextScreen: 5,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 2,
    message: t.ask_question,
    background: backgrounds[1],
    buttons: [
      {
        text: t.buttons.ask,
        className: `${buttonClass} btn-primary`,
        nextScreen: 3,
      },
      {
        text: t.buttons.another_day,
        className: `${buttonClass} btn-primary`,
        nextScreen: 6,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 3,
    message: t.be_my_valentine,
    background: backgrounds[2],
    buttons: [
      {
        text: t.buttons.yes,
        className: `${buttonClass} btn-primary`,
        nextScreen: 4,
      },
      {
        text: t.buttons.no,
        className: `${buttonClass} btn-primary`,
        nextScreen: 7,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 4,
    message: t.thank_you.replace("{name}", NAME),
    background: backgrounds[3],
    buttons: [],
    iconSrc: "/heart.png",
  },
  {
    screenNumber: 5,
    message: t.bad_mood,
    background: backgrounds[0],
    buttons: [
      {
        text: t.buttons.retry,
        className: `${buttonClass} btn-primary`,
        nextScreen: 1,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 6,
    message: t.sorry,
    background: backgrounds[1],
    buttons: [
      {
        text: t.buttons.retry,
        className: `${buttonClass} btn-primary`,
        nextScreen: 2,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 7,
    message: t.no_response,
    background: backgrounds[2],
    buttons: [
      {
        text: t.buttons.reconsider,
        className: `${buttonClass} btn-primary`,
        nextScreen: 3,
      },
    ],
    iconSrc: "",
  },
];

export { screens };
