import React from "react";
import { Quiz } from "./components/Quiz";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Quiz />
      </main>
    </>
  );
};

export default App;
