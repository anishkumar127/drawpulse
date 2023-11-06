"use client";
import { RxDownload, RxCopy, RxEraser, RxPencil1 } from "react-icons/rx";
import { AiOutlineUndo, AiOutlineRedo } from "react-icons/ai";
import styles from "./menu.module.css";
import { MENU_ITMES } from "@/constants";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { onActionItem, onMenuItem } from "@/store/features/menuSlice";
import cx from "classnames";
export const Menu = () => {
  const dispatch = useAppDispatch();
  const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem);
  const onHandleChange = (payload: string) => {
    dispatch(onMenuItem(payload));
  };
  const onActionChange = (payload: string) => {
    dispatch(onActionItem(payload));
  };
  return (
    <div className={styles.menuContainer}>
      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITMES?.PENCIL,
        })}
        onClick={() => onHandleChange(MENU_ITMES?.PENCIL)}
      >
        <RxPencil1 className={styles.icon} />
      </div>

      {/* <div className={styles.iconWrapper}>
        <RxCopy className={styles.icon} />
      </div> */}

      <div
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITMES?.ERASER,
        })}
        onClick={() => onHandleChange(MENU_ITMES?.ERASER)}
      >
        <RxEraser className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => onActionChange(MENU_ITMES?.UNDO)}
      >
        <AiOutlineUndo className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => onActionChange(MENU_ITMES?.REDO)}
      >
        <AiOutlineRedo className={styles.icon} />
      </div>
      <div
        className={styles.iconWrapper}
        onClick={() => onActionChange(MENU_ITMES?.DOWNLOAD)}
      >
        <RxDownload className={styles.icon} />
      </div>
    </div>
  );
};
