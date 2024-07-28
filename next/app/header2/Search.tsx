import styles from "./Search.module.css";
import { SearchIcon } from "./SearchIcon";

interface Props {
  focus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function Search(props: Props) {
  return (
    <div className={styles.component + (props.focus ? " " + styles.focus : "")}>
      <SearchIcon />
      <input
        className={styles.input}
        placeholder="search in document"
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
    </div>
  );
}
