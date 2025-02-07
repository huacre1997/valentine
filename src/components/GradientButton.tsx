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

const GradientButton: React.FC<ButtonProps> = ({ index, text, className, onClick }) => {
    const [backgroundPosition, setBackgroundPosition] = useState("50% 50%");

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target as HTMLButtonElement;

        const x = (offsetX / clientWidth) * 100;
        const y = (offsetY / clientHeight) * 100;

        setBackgroundPosition(`${x}% ${y}%`);
    };

    return (
        <motion.button
            className={className}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            whileTap={appConfig.animationEnabled ? { scale: 0.8 } : undefined}
            style={{
                background: "linear-gradient(135deg, #9b59b6, #e91e63)",
                backgroundSize: "200% 200%",
                backgroundPosition,
            }}
            variants={getButtonVariants(index)} // Pasamos el index
            initial="initial"
            animate={appConfig.animationEnabled ? "jumping" : undefined}
            whileHover={appConfig.animationEnabled ? "hovered" : undefined}
        >
            {text}
        </motion.button>
    );
};

export default GradientButton;
