import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const defaultCSS = `
body {
    margin: 0 auto
}`;

const styles = {
  container: {
    background: "blue",
  },
  container2: {
    background: "red",
  },
};

const LayoutGrid = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: 50px 1fr 40px;
`;

const StyledDiv = styled.div`
  font-size: 30px;
  font-size: 50px;
`;

const MainRow = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const Layout = ({ children }) => {
  return (
    <>
      <style>{defaultCSS}</style>
      <LayoutGrid>
        <Header />
        <div>
          Main
          <MainRow>
            {children}

          </MainRow>
        </div>
        <Footer copyright="2021" />
      </LayoutGrid>
    </>
  );
};

export default Layout;