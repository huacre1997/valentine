import { motion } from "framer-motion";
import { useState } from "react";
import { appConfig } from "../config/config";
import { getButtonVariants } from "../config/animationConfig";

interface ButtonProps {
    index: number;
    text: string;
    className: string;
    onClick?: () => void;
}
const theme = appConfig.theme

const themeStyles: Record<string, { gradient: string }> = {
    roses: {
        gradient: "linear-gradient(135deg, #a30808, #ff4d4d)", // Rojo oscuro intenso a rojo vibrante
    },
    tulips: {
        gradient: "linear-gradient(135deg, #9b59b6, #e91e63)",
    },
    sunflowers: {
        gradient: "linear-gradient(135deg, #f39c12, #ffeb3b)", // Naranja cálido a amarillo brillante
    },
};

const GradientButton: React.FC<ButtonProps> = ({ index, text, className, onClick }) => {
    const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");
    const { gradient } = themeStyles[theme];

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target as HTMLButtonElement;

        const x = (offsetX / clientWidth) * 100;
        const y = (offsetY / clientHeight) * 100;

        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <motion.button
            className={`${className} ${theme}-btn`}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            whileTap={appConfig.animationEnabled ? { scale: 0.8 } : undefined}
            style={{
                background: gradient,
                backgroundSize: "200% 200%",
                backgroundPosition,
                border: `2px solid white`,
            }}
            variants={getButtonVariants(index)}
            initial="initial"
            animate={appConfig.animationEnabled ? "jumping" : undefined}
            whileHover={appConfig.animationEnabled ? "hovered" : undefined}
        >
            {text}
        </motion.button>
    );
};

export default GradientButton;
