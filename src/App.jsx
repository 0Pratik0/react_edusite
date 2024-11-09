import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Programs from "./components/Programs/Programs";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        {/* in title we are passing the props subtitle and title */}
        <Title subTitle="Our Program" title="What We Offer" />
        <Programs />
      </div>
    </div>
  );
};

export default App;
