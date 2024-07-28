import { useEffect, useRef, useState } from "react";
import styles from "./Search.module.css";
import { SearchIcon } from "./SearchIcon";
import { SearchList } from "./SearchList";

interface Props {
  focus?: boolean;
  onFocus?: () => void;
  onLoseFocus?: () => void;
}

export function Search(props: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInputNonEmpty, setInputNonEmpty] = useState(false);

  function clearInput() {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setInputNonEmpty(false);
  }

  //
  // Handle click-outside event - if clicked outside of this component, close the component
  //
  function isClickInside(e: MouseEvent): boolean {
    if (ref.current) {
      if (e.composedPath) {
        return e.composedPath().indexOf(ref.current) > -1;
      } else if (e.target) {
        // @ts-expect-error TypeScript gives the following error:
        //   > Argument of type 'EventTarget' is not assignable to parameter of type 'Node'. ts(2345)
        //   however, e.target is actually a dom node and it works fine,
        //   otherwise, just incase this function is NOT called from a dom node, then the below returns false and that is still fine. (i.e.) assume it's clicked outside and close the window
        return ref.current.contains(e.target);
      }
    }

    // If unable to tell, assume it's clicked outside (i.e.) close the window
    return false;
  }

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (!isClickInside(e)) {
        //If clicked outside
        console.log("clicked outside");
        props.onLoseFocus && props.onLoseFocus();
        clearInput();
      }
    }

    if (props.focus) {
      // Click-away listner at the root document
      document.addEventListener("click", onClick);

      return () => document.removeEventListener("click", onClick);
    }
  }, [props]);

  return (
    <div
      ref={ref}
      className={styles.component + (props.focus ? " " + styles.focus : "")}
    >
      <div className={styles.searchbox}>
        <SearchIcon />
        <input
          ref={inputRef}
          className={styles.input}
          placeholder="search in document"
          onFocus={props.onFocus}
          onChange={(e) => {
            setInputNonEmpty(e.currentTarget.value !== "");
          }}
        />
      </div>
      {props.focus && isInputNonEmpty && <SearchList />}
    </div>
  );
}
