import { AnimatePresence, motion } from "framer-motion";
import MessageWithAnimation from "./MessageWithAnimation";
import GradientButton from "./GradientButton";
import { iconVariants, messageVariants, screenVariants } from "../config/animationConfig";

interface ButtonProps {
    text: string;
    className: string;
    onClick?: () => void;
}

interface ScreenProps {
    screenNumber: number;
    message: string;
    buttons: ButtonProps[];
    isVisible: boolean;
    onButtonClick?: (button: ButtonProps) => void;
    iconSrc: string;
}

const Screen: React.FC<ScreenProps> = ({ screenNumber, message, buttons, isVisible, onButtonClick = () => { }, iconSrc }) => {
    return (
        <AnimatePresence mode="wait">
            {isVisible && (
                <motion.div
                    key={screenNumber}
                    className={`screen screen-${screenNumber}`}
                    variants={screenVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{ display: "block", position: "relative", overflow: "hidden" }}
                >
                    <motion.div
                        className="message-container"
                        variants={messageVariants}
                        initial="initial"
                        animate="animate"
                        transition={{ duration: 2, ease: "easeOut" }}
                    >
                        <MessageWithAnimation message={message} />
                    </motion.div>

                    {iconSrc && (
                        <div style={{
                            display: "grid",
                            placeItems: "center",
                            width: "100%",
                            height: "100%",
                            position: "relative",
                            zIndex: 1,
                        }}>
                            <motion.img
                                src={iconSrc}
                                alt="Heart Icon"
                                style={{ width: "80px", filter: "drop-shadow(0 0 5px rgba(255, 0, 0, 0.8))" }}
                                variants={iconVariants}
                                initial="initial"
                                animate="animate"
                                transition={iconVariants.transition}
                            />
                        </div>
                    )}

                    {/* Botones */}
                    <div className="buttons-container">
                        {buttons.map((button, index) => (
                            <GradientButton
                                index={index}
                                key={index}
                                {...button}
                                onClick={() => {
                                    if (button.onClick) {
                                        button.onClick(); // Llamamos la función específica del botón si existe
                                    } else {
                                        onButtonClick(button); // Llamamos la función general
                                    }
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Screen;
