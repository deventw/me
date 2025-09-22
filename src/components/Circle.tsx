import { motion } from 'framer-motion';
import React from 'react';
import styles from './Circle.module.css';

const Circle: React.FC = () => {
  const circleSize = 200;

  return (
    <div className={styles.container}>
      <div className={styles.circleContainer} style={{ width: circleSize, height: circleSize }}>
        {/* Blurred content container */}
        <div className={styles.blurredContent}>
          {/* White background circle */}
          <div className={styles.whiteCircle} style={{ width: circleSize, height: circleSize }} />
          
          {/* Red gradient circle */}
          <motion.div
            className={`${styles.gradientCircle} ${styles.redGradient}`}
            style={{
              width: circleSize,
              height: circleSize,
              transform: `translate(${circleSize/5}px, ${circleSize/5}px)`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Yellow gradient circle */}
          <motion.div
            className={`${styles.gradientCircle} ${styles.yellowGradient}`}
            style={{
              width: circleSize,
              height: circleSize,
              transform: `translate(${circleSize/5}px, ${circleSize/5}px)`,
            }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Blue gradient circle */}
          <motion.div
            className={`${styles.gradientCircle} ${styles.blueGradient}`}
            style={{
              width: circleSize,
              height: circleSize,
              transform: `translate(${circleSize/5}px, ${circleSize/5}px)`,
            }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Circle;