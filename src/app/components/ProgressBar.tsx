import React from "react";
import styles from "../styles/ProgressBar.module.css"; // Adjust path as needed

interface ProgressBarProps {
    currentStage: number;
    totalStages: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStage, totalStages }) => {
    return (
        <div className={styles.progressContainer}>
            {Array.from({ length: totalStages }).map((_, index) => (
                <div key={index} className={styles.stepWrapper}>
                    {/* Render connector line only between steps */}
                    {index != 0 && index < totalStages - 1 && (
                        <div
                            className={`${styles.line} ${
                                index < currentStage ? styles.activeLine : ""
                            }`}
                        />
                    )}

                    {/* Step Circle */}
                    <div
                        className={`${styles.step} ${index <= currentStage ? styles.active : ""}`}
                    >
                        {index + 1}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
