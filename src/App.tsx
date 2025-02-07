import React, { useEffect, useState } from "react";
import Screen from "./components/Screen";
import BackgroundFade from "./components/BackgroundFade";
import "./App.css";
import MusicPlayer from "./components/MusicPlayer";
import { screens } from "./config/data";
import { appConfig } from "./config/config"; // Importar la configuración
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadAll } from "@tsparticles/all"
import snow from "./config/particles/snow";
import fireworks from "./config/particles/fireworks"; // Otra configuración para una pantalla específica

interface ParticlesComponentProps {
  options: Record<string, unknown>; // Replace 'any' with a more specific type
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = React.memo(({ options }) => (
  <Particles
    id="tsparticles"
    options={options} // Usamos la configuración de partículas que se pasa como prop
  />
));

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [particlesOptions, setParticlesOptions] = useState(snow); // Estado para las opciones de partículas

  const nextScreen = (nextScreenNumber: number) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentScreen(nextScreenNumber);
      setIsVisible(true);
    }, 1000);
  };

  const currentScreenData = screens.find(screen => screen.screenNumber === currentScreen);

  // Cambiar configuración de partículas según la pantalla
  useEffect(() => {
    switch (currentScreen) {
      case 1:
        setParticlesOptions(snow); // Configuración para la pantalla 1
        break;
      case 4:
        setParticlesOptions(fireworks); // Configuración para la pantalla 2
        break;
      default:
        setParticlesOptions(snow); // Configuración predeterminada
    }
  }, [currentScreen]);

  // Usar el engine al cargar las partículas
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine); // Ahora pasamos el engine al cargar las partículas
    }).then(() => {
      console.log("Motor de partículas inicializado");
    });
  }, []);

  return (
    <div className="app">
      {appConfig.animationEnabled && <ParticlesComponent options={particlesOptions} />}

      {appConfig.enableMusicPlayer && <MusicPlayer />} {/* Renderizar según config */}

      {currentScreenData && <BackgroundFade background={currentScreenData.background} />}

      {currentScreenData && (
        <Screen
          screenNumber={currentScreenData.screenNumber}
          message={currentScreenData.message}
          buttons={currentScreenData.buttons.map(button => ({
            ...button,
            onClick: () => nextScreen(button.nextScreen),
          }))}
          isVisible={isVisible}
          iconSrc={currentScreenData.iconSrc}
        />
      )}
    </div>
  );
};

export default App;
