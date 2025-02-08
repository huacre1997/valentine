export const appConfig = {
  enableMusicPlayer: import.meta.env.VITE_ENABLE_MUSIC || false, // Configuración del idioma, // Cambia a false si no quieres que se renderice
  language: import.meta.env.VITE_LANGUAGE || "es", // Configuración del idioma
  userName: import.meta.env.VITE_NAME || "Señorita", // Nombre de la persona
  animationEnabled: import.meta.env.VITE_ANIMATION_ENABLED || false, // Nombre de la persona
  theme: import.meta.env.VITE_THEME || "roses", // Nombre de la persona
};
