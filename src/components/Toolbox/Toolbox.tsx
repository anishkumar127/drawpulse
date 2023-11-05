"use client";
import { COLORS, MENU_ITMES } from "@/constants";
import styles from "./toolbox.module.css";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { reSizeBrush, switchColor } from "@/store/features/toolboxSlice";
import cx from 'classnames';
export const Toolbox = () => {
  const activeMenuItem = useAppSelector((state) => state?.menu?.activeMenuItem);
  const dispatch = useAppDispatch();
  const showStrokeToolOption = activeMenuItem === MENU_ITMES?.PENCIL;
  const showBrushToolOption =
    MENU_ITMES?.PENCIL || activeMenuItem === MENU_ITMES?.ERASER;
  const {color} = useAppSelector((state)=>state?.toolbox[activeMenuItem]);
  const updateBrushSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(reSizeBrush({ item: activeMenuItem, size: e?.target?.value }));
  };
  const updateColor = (color: string) => {
    dispatch(switchColor({ item: activeMenuItem, color }));
  };
  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption ? (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div className={styles.itemContainer}>
            <div
              className={cx(styles.colorBox,{[styles.active]:color === COLORS?.BLACK})}
              style={{ backgroundColor: COLORS?.BLACK }}
              onClick={() => updateColor(COLORS?.BLACK)}
            />
            <div
              className={cx(styles.colorBox,{[styles.active]:color === COLORS?.BLUE})}
              style={{ backgroundColor: COLORS?.BLUE }}
              onClick={() => updateColor(COLORS?.BLUE)}
            />
            <div
              className={cx(styles.colorBox,{[styles.active]:color === COLORS?.GREEN})}
              style={{ backgroundColor: COLORS?.GREEN }}
              onClick={() => updateColor(COLORS?.GREEN)}
            />
            <div
              className={cx(styles.colorBox,{[styles.active]:color === COLORS?.ORANGE})}
              style={{ backgroundColor: COLORS?.ORANGE }}
              onClick={() => updateColor(COLORS?.ORANGE)}
            />
            <div
              className={cx(styles.colorBox,{[styles.active]:color === COLORS?.RED})}
              style={{ backgroundColor: COLORS?.RED }}
              onClick={() => updateColor(COLORS?.RED)}
            />
            {/* <div
            className={cx(styles.colorBox,{[styles.active]:color === COLORS?.WHITE})}
            style={{ backgroundColor: COLORS.WHITE }}
          /> */}
            <div
              className={cx(styles.colorBox,{[styles.active]:color === COLORS?.YELLOW})}
              style={{ backgroundColor: COLORS?.YELLOW }}
              onClick={() => updateColor(COLORS?.YELLOW)}
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
