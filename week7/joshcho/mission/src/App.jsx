import React from "react";
import Header from "./components/Header";
import CardBoard from "./components/CardBoard";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <CardBoard />
      <Footer />
    </AppWrapper>
  );
}

export default App;
