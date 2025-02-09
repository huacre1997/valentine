import { AnimatePresence, motion } from "framer-motion";
import { appConfig } from "../config/config";

const { animationEnabled } = appConfig;

// Componente para manejar el fade del fondo
const BackgroundFade: React.FC<{ background: string }> = ({ background }) => {
    return animationEnabled ? (
        <AnimatePresence>
            <motion.div
                key={background}
                className="background"
                initial={{ opacity: 0, filter: "brightness(0.5)", scale: 1.1 }}
                animate={{ opacity: 1, filter: "brightness(1)", scale: 1 }}
                exit={{ opacity: 0, filter: "brightness(0)", scale: 1.1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: -1,
                }}
            />
        </AnimatePresence>
    ) : (
        <div
            className="background"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
        />
    );
};

export default BackgroundFade;
