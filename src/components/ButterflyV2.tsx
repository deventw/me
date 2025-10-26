"use client";
import { motion } from 'framer-motion';
import React from 'react';
import { SEOUL_COLORS, SHENZHEN_COLORS } from '~/constants/colors';
import styles from './ButterflyV2.module.css';
import Wing from './Wing';

const ButterflyViewV2: React.FC = () => {

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
            duration: 1.6,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <Wing
            visibleNumbers={[1, 2, 3, 4, 6, 10, 11, 15, 16, 17, 18, 19, 21, 25, 26, 30, 31, 35]}
            colors={SHENZHEN_COLORS} />
        </motion.div>

        {/* Bottom Wing (R) - Rotates on Z-axis */}
        <motion.div
          className={styles.wing}
          animate={{
            rotateY: [0, 45, 10],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 0.2
          }}
        >
          {/* <Image
            key={resolvedTheme}
            src={wingSrc}
            alt={"R"}
            width={500}
            height={300}
            // className="h-40 w-full overflow-hidden object-cover object-top"
          /> */}
          <Wing
            visibleNumbers={[1, 2, 3, 4, 6, 10, 11, 15, 16, 17, 18, 19, 21, 25, 26, 30, 31, 35]}
            colors={SEOUL_COLORS} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ButterflyViewV2;