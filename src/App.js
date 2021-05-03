import React, { useEffect, useState } from "react";
import styled from "styled-components";
import About from "./About";
import Home from "./Home";
import DogeImg from "./doge_moon.jpeg";

const Container = styled.div`
  background-color: #aaa;
  border: 1px solid red;
`;

export default function App({ page }) {
  const [pageState, setPageState] = useState(page);
  useEffect(() => {
    window.onpopstate = (event) => {
      setPage(event.state);
    };
  }, []);

  function onChangePage(e) {
    const newPage = e.target.dataset.page;
    window.history.pushState(newPage, "", `/${newPage}`);
    setPage(newPage);
  }

  const PageComponent = pageState === "home" ? Home : About;
  return (
    <Container>
      <img src={DogeImg} />
      <button data-page="home" onClick={onChangePage}>
        Home
      </button>
      <button data-page="about" onClick={onChangePage}>
        About
      </button>
      <PageComponent />
    </Container>
  );
}
