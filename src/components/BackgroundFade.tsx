import { AnimatePresence, motion } from "framer-motion";

const BackgroundFade: React.FC<{ background: string }> = ({ background }) => {
    return (
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "black", zIndex: -2 }}>
            {/* Fondo negro permanente para evitar el destello blanco */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={background} // Clave única para cambios de fondo
                    className="background"
                    initial={{ opacity: 1, filter: "brightness(0)", scale: 1.1 }} // Inicia negro con leve zoom
                    animate={{ opacity: 1, filter: "brightness(1)", scale: 1 }}  // Se muestra gradualmente
                    exit={{ opacity: 1, filter: "brightness(0)", scale: 1.1 }}  // Se oscurece antes de desaparecer
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Suavidad en la animación
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
        </div>
    );
};

export default BackgroundFade;
