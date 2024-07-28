import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.css";
import { SearchIcon } from "./SearchIcon";
import { SearchList } from "./SearchList";

interface Props {
  focus?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
}

export function Search(props: Props) {
  const ref = useRef<HTMLInputElement>(null);
  const [isInputNonEmpty, setInputNonEmpty] = useState(false);

  function clearInput() {
    if (ref.current) {
      ref.current.value = "";
    }
    setInputNonEmpty(false);
  }

  return (
    <div className={styles.component + (props.focus ? " " + styles.focus : "")}>
      <div className={styles.searchbox}>
        <SearchIcon />
        <input
          ref={ref}
          className={styles.input}
          placeholder="search in document"
          onFocus={props.onFocus}
          onChange={(e) => {
            setInputNonEmpty(e.currentTarget.value !== "");
          }}
          onBlur={() => {
            props.onBlur && props.onBlur();
            clearInput();
          }}
        />
      </div>
      {props.focus && isInputNonEmpty && <SearchList />}
    </div>
  );
}
