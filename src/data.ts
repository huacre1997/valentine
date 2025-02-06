import { appConfig } from "./config";
import { locales } from "./locales";

const NAME = appConfig.userName;
const LANGUAGE = appConfig.language as keyof typeof locales;

const t = locales[LANGUAGE];

const screens = [
  {
    screenNumber: 1,
    message: t.greetings.replace("{name}", NAME),
    background: "/bg1.png",
    buttons: [
      {
        text: t.buttons.hello,
        className: "btn-hello btn-primary",
        nextScreen: 2,
        index: 1,
      },
      {
        text: t.buttons.no_disturb,
        className: "btn-sorry btn-primary",
        nextScreen: 5,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 2,
    message: t.ask_question,
    background: "/bg2.png",
    buttons: [
      {
        text: t.buttons.ask,
        className: "btn-accept btn-primary",
        nextScreen: 3,
      },
      {
        text: t.buttons.another_day,
        className: "btn-reject btn-primary",
        nextScreen: 6,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 3,
    message: t.be_my_valentine,
    background: "/bg3.png",
    buttons: [
      {
        text: t.buttons.yes,
        className: "btn-yes btn-primary",
        nextScreen: 4,
      },
      {
        text: t.buttons.no,
        className: "btn-no btn-primary",
        nextScreen: 7,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 4,
    message: t.thank_you.replace("{name}", NAME),
    background: "/bg4.png",
    buttons: [],
    iconSrc: "/heart.png",
  },
  {
    screenNumber: 5,
    message: t.bad_mood,
    background: "/bg1.png",
    buttons: [
      {
        text: t.buttons.retry,
        className: "btn-back btn-primary",
        nextScreen: 1,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 6,
    message: t.sorry,
    background: "/bg2.png",
    buttons: [
      {
        text: t.buttons.retry,
        className: "btn-back btn-primary",
        nextScreen: 2,
      },
    ],
    iconSrc: "",
  },
  {
    screenNumber: 7,
    message: t.no_response,
    background: "/bg3.png",
    buttons: [
      {
        text: t.buttons.reconsider,
        className: "btn-back btn-primary",
        nextScreen: 3,
      },
    ],
    iconSrc: "",
  },
];

export { screens };
