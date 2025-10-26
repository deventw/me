import React from 'react';
import Leaf from './Leaf';
import styles from './Wing.module.css';

interface WingProps {
  className?: string;
  visibleNumbers?: number[];
  cellContent?: (number: number) => React.ReactNode;
  colors?: string[];
}

const Wing: React.FC<WingProps> = ({ className = '', visibleNumbers = [], colors = ['#dc2626'] }) => {
  const isVisible = (number: number) => {
    return visibleNumbers.length === 0 || visibleNumbers.includes(number);
  };

  // Track used colors to ensure all colors are used before repeating
  const usedColors = React.useRef<string[]>([]);
  
  const getRandomColor = () => {
    // If all colors have been used, reset the used colors array
    if (usedColors.current.length >= colors.length) {
      usedColors.current = [];
    }
    
    // Get available colors (not yet used)
    const availableColors = colors.filter(color => !usedColors.current.includes(color));
    
    // Select a random color from available colors
    const selectedColor = availableColors[Math.floor(Math.random() * availableColors.length)];
    
    // Add the selected color to used colors
    if (selectedColor) {
      usedColors.current.push(selectedColor);
    }
    
    return selectedColor;
  };
  

  return (
    <div className={`${styles.grid} ${className}`}>
      <div className={styles.row}>
        <div className={`${styles.cell} ${!isVisible(1) ? styles.hidden : ''}`} data-number={1}>
          {isVisible(1) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(2) ? styles.hidden : ''}`} data-number={2}>
          {isVisible(2) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(3) ? styles.hidden : ''}`} data-number={3}>
          {isVisible(3) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(4) ? styles.hidden : ''}`} data-number={4}>
          {isVisible(4) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(5) ? styles.hidden : ''}`} data-number={5}>
          {isVisible(5) && <Leaf size={24} color={getRandomColor()} />}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} ${!isVisible(6) ? styles.hidden : ''}`} data-number={6}>
          {isVisible(6) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(7) ? styles.hidden : ''}`} data-number={7}>
          {isVisible(7) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(8) ? styles.hidden : ''}`} data-number={8}>
          {isVisible(8) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(9) ? styles.hidden : ''}`} data-number={9}>
          {isVisible(9) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(10) ? styles.hidden : ''}`} data-number={10}>
          {isVisible(10) && <Leaf size={24} color={getRandomColor()} />}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} ${!isVisible(11) ? styles.hidden : ''}`} data-number={11}>
          {isVisible(11) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(12) ? styles.hidden : ''}`} data-number={12}>
          {isVisible(12) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(13) ? styles.hidden : ''}`} data-number={13}>
          {isVisible(13) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(14) ? styles.hidden : ''}`} data-number={14}>
          {isVisible(14) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(15) ? styles.hidden : ''}`} data-number={15}>
          {isVisible(15) && <Leaf size={24} color={getRandomColor()} />}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} ${!isVisible(16) ? styles.hidden : ''}`} data-number={16}>
          {isVisible(16) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(17) ? styles.hidden : ''}`} data-number={17}>
          {isVisible(17) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(18) ? styles.hidden : ''}`} data-number={18}>
          {isVisible(18) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(19) ? styles.hidden : ''}`} data-number={19}>
          {isVisible(19) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(20) ? styles.hidden : ''}`} data-number={20}>
          {isVisible(20) && <Leaf size={24} color={getRandomColor()} />}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} ${!isVisible(21) ? styles.hidden : ''}`} data-number={21}>
          {isVisible(21) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(22) ? styles.hidden : ''}`} data-number={22}>
          {isVisible(22) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(23) ? styles.hidden : ''}`} data-number={23}>
          {isVisible(23) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(24) ? styles.hidden : ''}`} data-number={24}>
          {isVisible(24) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(25) ? styles.hidden : ''}`} data-number={25}>
          {isVisible(25) && <Leaf size={24} color={getRandomColor()} />}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} ${!isVisible(26) ? styles.hidden : ''}`} data-number={26}>
          {isVisible(26) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(27) ? styles.hidden : ''}`} data-number={27}>
          {isVisible(27) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(28) ? styles.hidden : ''}`} data-number={28}>
          {isVisible(28) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(29) ? styles.hidden : ''}`} data-number={29}>
          {isVisible(29) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(30) ? styles.hidden : ''}`} data-number={30}>
          {isVisible(30) && <Leaf size={24} color={getRandomColor()} />}
        </div>
      </div>
      <div className={styles.row}>
        <div className={`${styles.cell} ${!isVisible(31) ? styles.hidden : ''}`} data-number={31}>
          {isVisible(31) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(32) ? styles.hidden : ''}`} data-number={32}>
          {isVisible(32) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(33) ? styles.hidden : ''}`} data-number={33}>
          {isVisible(33) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(34) ? styles.hidden : ''}`} data-number={34}>
          {isVisible(34) && <Leaf size={24} color={getRandomColor()} />}
        </div>
        <div className={`${styles.cell} ${!isVisible(35) ? styles.hidden : ''}`} data-number={35}>
          {isVisible(35) && <Leaf size={24} color={getRandomColor()} />}
        </div>
      </div>
    </div>
  );
};

export default Wing;
