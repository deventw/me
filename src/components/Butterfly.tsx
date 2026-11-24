import { motion } from 'framer-motion';
import { useTheme } from '~/components/theme/provider';
import React, { useEffect, useState } from 'react';
import styles from './Butterfly.module.css';

const ButterflyView: React.FC = () => {
  const { resolvedTheme } = useTheme()
  const [wingSrc, setWingSrc] = useState("/R_light.png") // default to light image

  useEffect(() => {
    if (resolvedTheme) {
      setWingSrc(resolvedTheme === "dark" ? "/R_light.png" : "/R_dark.png")
    }
  }, [resolvedTheme])

  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut"
      }}
    >
      <div className={styles.butterfly}>
      {/* Top Wing (R) - Flicks on Y-axis */}
      <motion.div 
        className={styles.wing}
        animate={{
          rotateY: [0, 15, 0],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      >
         <img
            key={resolvedTheme}
            src={wingSrc}
            alt={"R"}
            width={500}
            height={300}
            // className="h-40 w-full overflow-hidden object-cover object-top"
          />
      </motion.div>
      
      {/* Bottom Wing (R) - Rotates on Z-axis */}
      <motion.div 
        className={styles.wing}
        animate={{
          rotateY: [0, 45, 10],
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 0.2
        }}
      >
        <img
            key={resolvedTheme}
            src={wingSrc}
            alt={"R"}
            width={500}
            height={300}
            // className="h-40 w-full overflow-hidden object-cover object-top"
          />
      </motion.div>
      </div>
    </motion.div>
  );
};

export default ButterflyView;