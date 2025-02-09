import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const API_URL = "http://localhost:3000"; // Cambia por la URL de tu API

const BackgroundFade: React.FC<{ background: string }> = ({ background }) => {
    const [signedUrl, setSignedUrl] = useState("");

    useEffect(() => {
        fetch(`${API_URL}/getSignedUrl?path=${background}`)
            .then((res) => res.json())
            .then((data) => setSignedUrl(data.signedUrl))
            .catch((err) => console.error("Error al obtener la URL firmada", err));
    }, [background]);

    return (
        <AnimatePresence>
            {signedUrl && (
                <motion.div
                    key={signedUrl}
                    className="background"
                    initial={{ opacity: 0, filter: "brightness(0.5)", scale: 1.1 }}
                    animate={{ opacity: 1, filter: "brightness(1)", scale: 1 }}
                    exit={{ opacity: 0, filter: "brightness(0)", scale: 1.1 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{
                        backgroundImage: `url(${signedUrl})`,
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
            )}
        </AnimatePresence>
    );
};

export default BackgroundFade;
