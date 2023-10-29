import { RxDownload, RxCopy, RxEraser, RxPencil1 } from "react-icons/rx";
import { AiOutlineUndo, AiOutlineRedo } from "react-icons/ai";
import styles from "./menu.module.css";
export const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <div className={styles.iconWrapper}>
        <RxPencil1 className={styles.icon} />
      </div>

      {/* <div className={styles.iconWrapper}>
        <RxCopy className={styles.icon} />
      </div> */}

      <div className={styles.iconWrapper}>
        <RxEraser className={styles.icon} />
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
