import React, { useEffect, useState } from "react";
import About from "./About";
import Home from "./Home";

export default function App({ page }) {
  const [pageState, setPageState] = useState(page);
  useEffect(() => {
    window.onpopstate = (event) => {
      setPage(event.state);
    };
  }, []);

  function onChangePage(e) {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, '', `/${newPage}`);
    setPage(newPage);
  }

  const PageComponent = pageState === "home" ? Home : About;
  return (
    <div className="container">
      <button data-page="home" onClick={onChangePage}>Home</button>
      <button data-page="about" onClick={onChangePage}>About</button>
      <PageComponent />
    </div>
  )
}
