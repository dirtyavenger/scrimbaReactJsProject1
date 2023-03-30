import React from "react";
import ReactDOM from "react-dom";
import Footer from "./res/components/Footer";
import MainContent from "./res/components/MainContent";
import Title from "./res/components/Title";
import Header from "./res/components/Header";
function Page() {
  return (
    <div>
      <Header />
      <Title />
      <MainContent />
      <Footer />
    </div>
  );
}
ReactDOM.render(<Page />, document.querySelector("#root"));

//document.querySelector("#root").append(content);
