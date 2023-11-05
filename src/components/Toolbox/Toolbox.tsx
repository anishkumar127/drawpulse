"use client";
import { COLORS, MENU_ITMES } from "@/constants";
import styles from "./toolbox.module.css";
import { useAppSelector } from "@/store/hooks";
export const Toolbox = () => {
  const activeMenuItem = useAppSelector((state) => state?.menu?.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITMES?.PENCIL;
  const showBrushToolOption =
    MENU_ITMES?.PENCIL || activeMenuItem === MENU_ITMES?.ERASER;
  const updateBrushSize = () => {};
  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption ? (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLACK }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.BLUE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.GREEN }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.ORANGE }}
            />
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.RED }}
            />
            {/* <div
            className={styles.colorBox}
            style={{ backgroundColor: COLORS.WHITE }}
          /> */}
            <div
              className={styles.colorBox}
              style={{ backgroundColor: COLORS.YELLOW }}
            />
          </div>
        </div>
      ) : null}

      {/* Brush Size */}
      {showBrushToolOption ? (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size</h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
};
