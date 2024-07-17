import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

export default function Header({ setPageNumber, pageNumber }) {
  return (
    <div className="header">
      <FontAwesomeIcon
        className={
          pageNumber === 1 ? "button button-disabled" : "button button-enabled"
        }
        icon={faCaretLeft}
        type="button"
        onClick={() => pageNumber !== 1 && setPageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      />
      <h1 className="header-title">Rick and Morty Characters</h1>
      <FontAwesomeIcon
        className={
          pageNumber === 42 ? "button button-disabled" : "button button-enabled"
        }
        icon={faCaretRight}
        type="button"
        onClick={() => pageNumber !== 42 && setPageNumber((page) => page + 1)}
        disabled={pageNumber === 42}
      />
    </div>
  );
}
