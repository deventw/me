import React from 'react';
import styles from './Leaf.module.css';

interface LeafProps {
  className?: string;
  size?: number;
  color?: string;
}

const Leaf: React.FC<LeafProps> = ({ 
  className = '', 
  size = 24, 
  color = '#dc2' 
}) => {
  const containerStyle = {
    width: `${size}px`,
    height: `${size}px`,
  };



  const redRingStyle = {
    backgroundColor: color,
  };

  return (
    <div className={`${styles.container} ${className}`} style={containerStyle}>
        <div className={styles.redRing} style={redRingStyle} />
    </div>
  );
};

export default Leaf;
