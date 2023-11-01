'use client';
import { RxDownload, RxCopy, RxEraser, RxPencil1 } from "react-icons/rx";
import { AiOutlineUndo, AiOutlineRedo } from "react-icons/ai";
import styles from "./menu.module.css";
import { MENU_ITMES } from "@/constants";
import { useAppDispatch } from "@/store/hooks";
import { onMenuItem } from "@/store/features/menuSlice";
export const Menu = () => {
  const dispatch = useAppDispatch();
  const onHandleChange = (payload: string) => {
    dispatch(onMenuItem(payload));
  };
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper} onClick={() => onHandleChange(MENU_ITMES?.PENCIL)}>
        <RxPencil1
          className={styles.icon}
          
        />
      </div>

      {/* <div className={styles.iconWrapper}>
        <RxCopy className={styles.icon} />
      </div> */}

      <div className={styles.iconWrapper} onClick={() => onHandleChange(MENU_ITMES?.ERASER)}>
        <RxEraser
          className={styles.icon}
          
        />
      </div>
      <div className={styles.iconWrapper}>
        <AiOutlineUndo className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <AiOutlineRedo className={styles.icon} />
      </div>
      <div className={styles.iconWrapper}>
        <RxDownload className={styles.icon} />
      </div>
    </div>
  );
};
