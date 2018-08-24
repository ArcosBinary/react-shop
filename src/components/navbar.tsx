import * as React from "react";
import Article from "./article";

// Stateless Functional Components
const NavBar = ({ articleList }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Different Articles:{" "}
        <span className="badge badge-pill badge-secondary">
          {articleList.filter(c => c.value !== 0).length}
        </span>
        <br />
        Total Amount of Articles:{" "}
        <span className="badge badge-pill badge-secondary">
          {articleList
            .map((c: Article) => c.value)
            .reduce((a: Article, b: Article) => a + b)}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
